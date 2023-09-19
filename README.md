# Agent Parag - A chat based interface for [nlp-raga](https://github.com/mainrepo/nlp-raga)
The focus of this next-js build is to craft an *interface for backend services* based on ***GPT & LLM*** using ***R***etrieval ***A***ugmented ***G***eneration (**RAG**). This interface can use any backend service like ***[nlp-raga](https://github.com/mainrepo/nlp-raga)*** as specified in [Vital info](#vital-info) section.

## <ins>User Guidelines</ins>
Please use terminal for ***project installation**, **build** & **running locally** for **testing**. The **integrated terminal of vscode** can also be used. **Windows users can use Ubuntu or Al2 machines running on WSL 2***

After cloing the [agent-parag](https://github.com/mainrepo/agent-parag) repository; cd to the *agent-parag* directory and fire below commands as required.

### <ins>Setup</ins>
This next-js project is built on node version 18.17 and uses *yarn* package manager.
```shell
# install the npm dependencies 
yarn install
```
You can also use the ***npm*** as appropriate. 

### <ins>Running</ins>
A backend service like ***nlp-raga*** is required as mentioned in the [Vital info](#vital-info) section.
```shell
# The nlp-raga service must be run before running this interface
poetry run test-srv

# now run the interface as below
yarn run dev
```

## <ins>Vital Info</ins>
1. This project is an *interface* to the services based on ***GPT or LLM***. This project *calls* a standard set of end-points (unified API specs). These end-points are implemented in all the **NLP** handling services ***avilable in this repository***. So before running this project any such service like *[nlp-raga](https://github.com/mainrepo/nlp-raga)* must be up & running. The other ***nlp-**** services can also be used, though only one at a time.

2. The project uses yarn (package.json) for dependency management.

3. Here is a screenshot of the running application.\
![BasicRun](assets/readme/basic_run.png?raw=true)

4. The project setup information\
![Setup](assets/readme/setup.png?raw=true)

4. :information_desk_person: Parag also knows a bit about me :smiley: \
![Me](assets/readme/my_info.png?raw=true)

## <ins>License</ins>
[MIT](https://choosealicense.com/licenses/mit/)