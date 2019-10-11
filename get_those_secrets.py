
# coding: utf-8

# In[21]:

import pandas as pd
from bs4 import BeautifulSoup
import requests
from csv import writer


# In[ ]:

# response = requests.get('https://www.facebook.com/pg/TuftsSecrets/posts/?ref=page_internal')
# soup = BeautifulSoup(response.content, 'html.parser')
# print(soup)
    
import time
from selenium import webdriver
from bs4 import BeautifulSoup as bs

# If not using Chrome, can change to Firefox
browser = webdriver.Chrome()

# Desired webpage
browser.get("https://www.facebook.com/pg/TuftsSecrets/posts/?ref=page_internal")

# Selenium script to scroll to the bottom, wait 3 seconds for the next batch of data to load, then continue scrolling.  It will continue to do this until the page stops loading new data.
lenOfPage = browser.execute_script("window.scrollTo(0, document.body.scrollHeight);var lenOfPage=document.body.scrollHeight;return lenOfPage;")
match=False
while(match==False):
        lastCount = lenOfPage
        time.sleep(3)
        lenOfPage = browser.execute_script("window.scrollTo(0, document.body.scrollHeight);var lenOfPage=document.body.scrollHeight;return lenOfPage;")
        if lastCount==lenOfPage:
            match=True

# Grab source code
source_data = browser.page_source

# Parse source with BeautifulSoup
bs_data = bs(source_data, 'html.parser')

# if line directly above does not work, run just ""bs_data = bs(source_data)""


# In[24]:


# step to be done after the entire web page is parse-able
post_list = soup.findAll('p')

real_list = []
for x in post_list:
    real_list.append(str(x))
print(real_list)

def parse_secrets(post_list):
    posts = []
    
    for x in post_list:
        y = x.replace('<p>', '')
        z = y.replace('</p>', '')
        if z[0] == '#':
            posts.append(z)
    return(posts)


# In[25]:

posts = parse_secrets(real_list)


# In[26]:

for i in posts:
    print(i)

