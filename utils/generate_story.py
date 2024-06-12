from openai import OpenAI
import json

from utils.api_key1 import api_key


client = OpenAI(api_key=api_key)

SYSTEM_PROMPT = """You are a story creator for a text-based detective game.
You are given a prompt to create a story for a game, containing story panels and facts.
While playing the game, the player traverses the game world - story panels - and collects facts. Then he combines the facts he collected and deduces new facts from them. There should be a lot of facts, but a lot of them should not be relevant to the investigation - they are there to prevent the player from brute-forcing the solution.
The game should not end on a story panel that contains some final confrontation or catching the murderer. Story panels are the world of the game, the background for action. They should contain information about scenery, maybe description of the evidence and suspects that can be found there. In every story panel there should be multiple facts that player gets. Player's main task is to combine facts that he gathered and get new ones, until finally he gets to the final one.
In the example story below, facts 1-6 are found while traversing the story panels - they should be clues about different suspects or pieces of evidence. Then, the player should combine e.g. fact 4 with fact 5 and get fact 7. Then fact 7 can be combined with fact 3 and the player gets fact 9. And so on, until player gets the final fact which ends the game. The output of the combination should logically follow the combination, e.g. fact 7 should logically follow fact 4 and fact 5. 
Return JSON object with the story that contains {} facts, about the museum heist.
Here is an example story:
{{
  "title": "Demo Game",
  "startingPanelId": "panel-0",
  "finalFactId": "fact-10",
  "storyPanels": {{
    "panel-0": {{
      "title": "Panel 0",
      "content": "<p>Content of Panel 0.</p>",
      "background": "panel0.jpg",
      "actions": [
        {{
          "id": "action-1",
          "title": "Go to Panel 1",
          "panelId": "panel-1"
        }},
        {{
          "id": "action-2",
          "title": "Go to Panel 2",
          "panelId": "panel-2"
        }}
      ]
    }},
    "panel-1": {{
      "title": "Panel 1",
      "content": "<p>Content of Panel 1.</p>",
      "background": "panel1.jpg",
      "actions": [
        {{
          "id": "action-1",
          "title": "Go to Panel 2",
          "panelId": "panel-2"
        }}
      ]
    }},
    "panel-2": {{
      "title": "Panel 2",
      "content": "<p>Content of Panel 2.</p>",
      "background": "panel2.jpg",
      "actions": [
        {{
          "id": "action-1",
          "title": "Go to Panel 1",
          "panelId": "panel-1"
        }},
        {{
          "id": "action-2",
          "title": "Go to Panel 0",
          "panelId": "panel-0"
        }}
      ]
    }}
  }},
  "facts": {{
    "fact-1": {{
      "panelId": "panel-0",
      "title": "Fact 1",
      "description": "Description of Fact 1"
    }},
    "fact-2": {{
      "panelId": "panel-0",
      "title": "Fact 2",
      "description": "Description of Fact 2"
    }},
    "fact-3": {{
      "panelId": "panel-1",
      "title": "Fact 3",
      "description": "Description of Fact 3"
    }},
    "fact-4": {{
      "panelId": "panel-2",
      "title": "Fact 4",
      "description": "Description of Fact 4"
    }},
    "fact-5": {{
      "panelId": "panel-2",
      "title": "Fact 5",
      "description": "Description of Fact 5"
    }},
    "fact-6": {{
      "panelId": "panel-2",
      "title": "Fact 6",
      "description": "Description of Fact 6"
    }},
    "fact-7": {{
      "title": "Fact 7",
      "description": "Description of Fact 7",
      "requiredFacts": ["fact-4", "fact-5"]
    }},
    "fact-8": {{
      "title": "Fact 8",
      "description": "Description of Fact 8",
      "requiredFacts": ["fact-1", "fact-2", "fact-6"]
    }},
    "fact-9": {{
      "title": "Fact 9",
      "description": "Description of Fact 9",
      "requiredFacts": ["fact-3", "fact-7"]
    }},
    "fact-10": {{
      "title": "Fact 10",
      "description": "Description of Fact 10",
      "requiredFacts": ["fact-8", "fact-9"]
    }}
  }}
}}

While playing the game, player moves from one story panel to another using actions 
that have target story panel id - e.g. 
{{
  "id": "action-1",
  "title": "Go to Panel 1",
  "panelId": "panel-1"
}}
here action points to story panel of id "panel-1".
Core of the game lies in facts that player collects while traversing the story panels. 
There are two types of facts - the ones that are collected while traversing the story panels 
and the ones that are deduced by player by connecting others. On example, 
"fact-5": {{
  "panelId": "panel-2",
  "title": "Fact 5",
  "description": "Description of Fact 5"
}}
Fact 5 is collected when player is on the panel of id "panel-2".
On the other hand,
"fact-10": {{
  "title": "Fact 10",
  "description": "Description of Fact 10",
  "requiredFacts": ["fact-8", "fact-9"]
}}
Fact 10 is collected when player has already found facts of ids "fact-8" and "fact-9", and combines them by "deducing" connection. 
Required facts must have length of at least 2. Fact 10 in this example should be logically deduced from fact-8 and fact-9, e.g.
fact-8: "All dolphin are mammals",
fact-9: "All mammals have kidneys",
fact-10: "All dolphins have kidneys"
Game is finished when the final fact is collected.
"""

def call_gpt(prompt, temperature=0.7, model="gpt-4o", max_tokens=4000, n_facts=10):
    formatted_system_prompt = SYSTEM_PROMPT.format(n_facts)
    print("formatted_system_prompt:", formatted_system_prompt, "\n")
    try:
        response = client.chat.completions.create(
            model=model, # gpt-4
            response_format={"type": "json_object"}, # gtego
            messages=[
                {"role": "system", "content": formatted_system_prompt},
                {"role": "user", "content": prompt}
            ],
            temperature=temperature,
            max_tokens=max_tokens
        )

        # Get the text of the response
        message = response.choices[0].message.content
        # Convert the text to a JSON object
        message = json.loads(message)

        return message
    except Exception as e:
        return str(e)

# Main function
def main():
    prompt = "Create story about the museum heist when someone was trying to steal a portrait"
    response = call_gpt(prompt)
    print(response)

    with open("story.json", "w") as f:
        f.write(json.dumps(response))

if __name__ == "__main__":
    main()
