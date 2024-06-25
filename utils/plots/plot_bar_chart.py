import matplotlib.pyplot as plt
import numpy as np

def plot_bar_chart(data, title, xlabel, ylabel, filename):
    """
    Plot a bar chart for the given data and save it as a PNG file.

    Parameters:
    data (list): A list of numerical values to plot.
    title (str): The title of the plot.
    xlabel (str): The label for the x-axis.
    ylabel (str): The label for the y-axis.
    filename (str): The name of the file to save the plot as.
    """
    # Count the occurrences of each rating
    unique, counts = np.unique(data, return_counts=True)
    response_counts = dict(zip(unique, counts))

    # Prepare data for the bar chart
    labels = np.arange(1, 11)
    heights = [response_counts.get(label, 0) for label in labels]
    percentages = [f'{(count / len(data)) * 100:.1f}%' for count in heights]

    fig, ax = plt.subplots(figsize=(12, 6))
    bars = ax.bar(labels, heights, color='brown', edgecolor='black')

    # Adding counts and percentages above the bars
    for bar, height, percentage in zip(bars, heights, percentages):
        ax.annotate(f'{height}\n({percentage})', 
                    xy=(bar.get_x() + bar.get_width() / 2, height),
                    xytext=(0, 3),  # 3 points vertical offset
                    textcoords="offset points",
                    ha='center', va='bottom')

    ax.set_title(title, fontsize=16)
    ax.set_xlabel(xlabel, fontsize=14)
    ax.set_ylabel(ylabel, fontsize=14)
    ax.set_xticks(labels)
    ax.set_xticklabels(labels)
    ax.set_yticks(np.arange(0, max(heights) + 1, 1))
    ax.set_ylim(0, max(heights) + 1)

    plt.grid(True, axis='y', linestyle='--', alpha=0.7)

    # Save the plot as a PNG file
    plt.savefig(f"img/{filename}", format='png', bbox_inches='tight', pad_inches=0.1)

    # plt.show()
