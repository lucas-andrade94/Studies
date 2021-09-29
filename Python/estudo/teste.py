from collections import Counter

n = int(input().strip())
if 1 <= n <= 10 ** 5:
    words = [input().strip() for x in range(n)]
    contador = Counter(words)
    s_contador = ""

    values = list(contador.values())

    for i in values:
        s_contador = s_contador + str(i) + " "

    s_contador = s_contador[0:-1]

    print("{}\n{}".format(len(values), s_contador))
