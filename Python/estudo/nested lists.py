notas = []

if __name__ == '__main__':
    for x in range(int(input())):
        name = input()
        score = float(input())

        notas.append([name, score])

    notas_ordenadas = dict(notas)
    print(notas_ordenadas)