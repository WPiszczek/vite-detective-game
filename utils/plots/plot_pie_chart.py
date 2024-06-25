import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec


def count_responses(data, responses):
    response_counts = {}
    for response in responses:
        response_counts[response] = data.count(response)
    return response_counts


def plot_pie_chart(data, title, filename, responses, figsize=(12, 4)):
    """
    Generate a pie chart with the specified data and save it as a PNG file.

    Parameters:
    data (list): List of responses.
    title (str): Title of the pie chart.
    filename (str): Filename for the saved image.
    figsize (tuple): Figure size for the plot.
    """
    # Count the occurrences of each response
    response_counts = count_responses(data, responses)
    
    # Colors to match the example chart
    colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']
    
    fig = plt.figure(figsize=figsize)
    gs = GridSpec(1, 2, width_ratios=[1, 1])  # Two columns with equal width

    # Pie chart on the left
    ax_pie = fig.add_subplot(gs[0, 0])
    wedges, texts, autotexts = ax_pie.pie(response_counts.values(), 
                                          autopct='%1.1f%%', 
                                          startangle=90, 
                                          colors=colors)
    ax_pie.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

    # Legend on the right
    ax_legend = fig.add_subplot(gs[0, 1])
    ax_legend.axis('off')  # Hide the axis for the legend
    ax_legend.legend(wedges, response_counts.keys(), loc='center', frameon=False)
    
    # Add a title across both axes
    plt.suptitle(title, fontsize=16, y=0.95)
    
    # Save the plot as a PNG file with tight layout
    plt.savefig(f"img/{filename}", format='png', bbox_inches="tight", pad_inches=0.1, dpi=100)

    # Do not show the plot
    # plt.show()
