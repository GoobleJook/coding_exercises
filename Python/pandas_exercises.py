import pandas as pd

""" Series offer significant speed increases of Python's standard lists """

animals = ['Tiger', 'Lion', 'Baer']
animalSeries = pd.Series(animals)
print(animalSeries)

numbers = [1, 2, 3]
numberSeries = pd.Series(numbers)
print(numberSeries)

""" What do we do with missing data, as opposed to Python's None type? """