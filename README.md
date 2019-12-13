# nils_kdag

## Sätta upp projekt

Installera ubuntu på Docker
docker run -it -v $PWD:/home -w /home ubuntu

Set up node
docker run -it -v "$PWD:/home" -w /home --entrypoint bash node:12

Peka port 3000 mot docker
ocker run -it -v "$PWD:/home" -w /home --entrypoint bash -p 3000:3000 node:12


Starta server (skapa server fil)
node server.js 


Disconneta server= ctrl+c


git add filnamn
git status = kolla status
git commit
-m "" = message


ööö