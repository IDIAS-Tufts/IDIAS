from bs4 import BeautifulSoup as bs
import csv 
import re

def remove_braces(inStr):
    current = 0
    brace_open = False

    final_string = ""

    for s in inStr:
        if s == "<":
            brace_open = True

        if not brace_open:
            final_string += s

        if s == ">":
            brace_open = False

    return final_string

def seperate_num(inStr):
    num_start = 0
    num_end = 0

    for i in range(len(inStr)):
        if inStr[i] == "#":
            num_start = i + 1

        if inStr[i] == ":":
            num_end = i
            break

    try:
        num = int(inStr[num_start:num_end])
    except ValueError:
        return False, None, None

    return True, num, inStr[num_end+2: len(inStr)]

def remove_non_alphabet(inStr):
    ret = ""
    for s in inStr:
        if s.isalpha() or s == " ":
            ret += s
        else:
            ret += " "

    ret = re.sub(' +', ' ', ret)
    ret = ret.strip()
    
    return ret

def clean_post(p):
    ps = str(p)[3:-4]
    ps = remove_braces(ps)
    (s, n, ps) = seperate_num(ps)

    if not s:
        return False, None, None

    ps = remove_non_alphabet(ps)

    return True, n, ps

def main():
    # Grab source code
    f = open("Tufts Secrets - Posts.html","r")
    source_data = f.read()

    # Parse source with BeautifulSoup
    bs_data = bs(source_data, 'html.parser')

    post_list = bs.findAll(bs_data, 'p')

    real_list = []
    for x in post_list:
        (s, n, p) = clean_post(x)

        if s:
            real_list.append([n, p])

    with open('posts.csv', 'w') as writeFile:
        writer = csv.writer(writeFile)
        writer.writerows(real_list)

    writeFile.close()

main()