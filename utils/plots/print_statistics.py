from statistics import mean, median

def print_statistics(arr, name):
  print(name, "mean", mean(arr))
  print(name, "median", median(arr))