from plot_pie_chart import plot_pie_chart
from plot_bar_chart import plot_bar_chart
from print_statistics import print_statistics 

data1 = [
    "Nie gram w gry", "Gram sporadycznie", "Gram sporadycznie", 
    "Gram codziennie/kilka razy w tygodniu", "Gram codziennie/kilka razy w tygodniu", 
    "Gram codziennie/kilka razy w tygodniu", "Jestem niedzielnym graczem", 
    "Nie gram w gry", "Nie gram w gry", "Gram sporadycznie", 
    "Jestem niedzielnym graczem", "Gram sporadycznie", "Nie gram w gry", 
    "Nie gram w gry", "Jestem niedzielnym graczem", 
    "Gram codziennie/kilka razy w tygodniu", "Gram sporadycznie", 
    "Gram sporadycznie", "Gram sporadycznie", 
    "Gram codziennie/kilka razy w tygodniu", "Gram codziennie/kilka razy w tygodniu", 
    "Gram sporadycznie", "Gram sporadycznie", "Gram sporadycznie", 
    "Jestem niedzielnym graczem", "Gram sporadycznie"
]

data2 = [
    "Czytam/oglądam okazyjnie", "Nie czytam/nie oglądam", "Nie czytam/nie oglądam", 
    "Czytam/oglądam sporadycznie", "Czytam/oglądam sporadycznie", "Czytam/oglądam regularnie", 
    "Czytam/oglądam sporadycznie", "Czytam/oglądam regularnie", "Czytam/oglądam okazyjnie", 
    "Czytam/oglądam okazyjnie", "Czytam/oglądam sporadycznie", "Czytam/oglądam sporadycznie", 
    "Czytam/oglądam sporadycznie", "Czytam/oglądam okazyjnie", "Czytam/oglądam okazyjnie", 
    "Nie czytam/nie oglądam", "Czytam/oglądam sporadycznie", "Czytam/oglądam sporadycznie", 
    "Czytam/oglądam sporadycznie", "Czytam/oglądam sporadycznie", "Czytam/oglądam okazyjnie", 
    "Nie czytam/nie oglądam", "Czytam/oglądam sporadycznie", "Czytam/oglądam regularnie", 
    "Czytam/oglądam okazyjnie", "Nie czytam/nie oglądam"
]

search_data_museum_heist = [
    "żadna z nich",
    "żadna z nich",
    "żadna z nich",
    "domyślna",
    "żadna z nich",
    "żadna z nich",
    "żadna z nich",
    "żadna z nich",
    "żadna z nich",
    "żadna z nich",
    "domyślna",
    "żadna z nich",
    "pełnotekstowa",
    "żadna z nich",
    "obie z nich",
    "pełnotekstowa",
    "pełnotekstowa",
    "pełnotekstowa",
    "obie z nich",
    "żadna z nich",
    "żadna z nich",
    "żadna z nich",
    "obie z nich",
    "pełnotekstowa"
]

search_data_the_murder = [
    "obie z nich",
    "żadna z nich",
    "obie z nich",
    "obie z nich",
    "obie z nich",
    "domyślna",
    "pełnotekstowa",
    "obie z nich",
    "żadna z nich",
    "obie z nich",
    "żadna z nich",
    "obie z nich",
    "pełnotekstowa",
    "domyślna",
    "obie z nich",
    "obie z nich",
    "pełnotekstowa",
    "obie z nich",
    "żadna z nich",
    "pełnotekstowa",
    "żadna z nich",
    "domyślna",
    "pełnotekstowa"
]

ratings_the_museum_heist = [
    4, 7, 7, 6, 5, 6, 7, 5, 9, 7, 6, 8, 6, 4, 6, 5, 4, 4, 5, 6, 4, 5, 5, 5
]
search_the_museum_heist = [
    1, 1, 1, 5, 1, 1, 2, 1, 1, 1, 3, 2, 3, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 3
]

ratings_the_murder = [
    6, 10, 7, 9, 8, 7, 9, 9, 7, 8, 8, 7, 7, 8, 8, 8, 7, 7, 7, 6, 8, 7, 8
]
search_the_murder = [
    1, 1, 5, 8, 6, 5, 8, 10, 1, 7, 2, 7, 3, 7, 10, 7, 4, 2, 1, 3, 2, 3, 7
]

print_statistics(ratings_the_museum_heist, "Ratings on The Museum Heist")
print_statistics(search_the_museum_heist, "Search Data on The Museum Heist")

print_statistics(ratings_the_murder, "Ratings on The Murder")
print_statistics(search_the_murder, "Search Data on The Murder")

plot_pie_chart(
  data=data1,
  title="Doświadczenia z grami komputerowymi",
  filename="doswiadczenia_z_grami_komputerowymi.png",
  responses=[
    "Gram codziennie/kilka razy w tygodniu",
    "Jestem niedzielnym graczem",
    "Gram sporadycznie",
    "Nie gram w gry",
  ]
)

plot_pie_chart(
  data=data2,
  title="Doświadczenia z fikcją detektywistyczną",
  filename="doswiadczenia_z_fikcja_detektywistyczna.png",
  responses=[
    "Czytam/oglądam regularnie",
    "Czytam/oglądam okazyjnie",
    "Czytam/oglądam sporadycznie",
    "Nie czytam/nie oglądam",
  ]
)

plot_pie_chart(
  data=search_data_museum_heist,
  title='Metody wyszukiwania faktów w scenariuszu "The Museum Heist"',
  filename="metody_wyszukiwania_the_museum_heist.png",
  responses=[
    "domyślna",
    "pełnotekstowa",
    "obie z nich",
    "żadna z nich",
  ]
)

plot_pie_chart(
  data=search_data_the_murder,
  title='Metody wyszukiwania faktów w scenariuszu "The Murder on the Midgnight Express"',
  filename="metody_wyszukiwania_the_murder_on_the_midnight_express.png",
  responses=[
    "domyślna",
    "pełnotekstowa",
    "obie z nich",
    "żadna z nich",
  ]
)


plot_bar_chart(
    data=ratings_the_museum_heist,
    title='Poziom trudności scenariusza "The Museum Heist"',
    xlabel='Ocena trudności (1 do 10)',
    ylabel='Liczba odpowiedzi',
    filename='poziom_trudnosci_the_museum_heist.png'
)

plot_bar_chart(
    data=ratings_the_murder,
    title='Poziom trudności scenariusza "The Murder on the Midgnight Express"',
    xlabel='Ocena trudności (1 do 10)',
    ylabel='Liczba odpowiedzi',
    filename='poziom_trudnosci_the_murder_on_the_midnight_express.png'
)

plot_bar_chart(
    data=search_the_museum_heist,
    title='Poziom przydatności wyszukiwania w scenariuszu "The Museum Heist"',
    xlabel='Ocena przydatności (1 do 10)',
    ylabel='Liczba odpowiedzi',
    filename='poziom_przydatnosci_wyszukiwania_the_museum_heist.png'
)

plot_bar_chart(
    data=search_the_murder,
    title='Poziom przydatności wyszukiwania w scenariuszu "The Murder on the Midgnight Express"',
    xlabel='Ocena przydatności (1 do 10)',
    ylabel='Liczba odpowiedzi',
    filename='poziom_przydatnosci_wyszukiwania_the_murder_on_the_midnight_express.png'
)
