# nils_kdag

## Sätta upp projekt

Installera ubuntu på Docker

```
docker run -it -v $PWD:/home -w /home ubuntu
```

Set up node

```
docker run -it -v "\$PWD:/home" -w /home --entrypoint bash node:12
```

Peka port 3000 mot docker

```
docker run -it -v "\$PWD:/home" -w /home --entrypoint bash -p 3000:3000 node:12
```

Starta server (skapa server fil), efter att docker har startat med kommandot ovan.

```
node server.js
```

Disconneta server= `ctrl+c`

```
git add [filnamn] // Välj fil att pusha
git status // kolla status
git commit // Lägg alltid till meddelande, kort och beskrivance
git commit -m "" //message

git log // Kolla senaste commits
git log --graph --all --decorate // Snygg variant

git show [commit ID] // visar vad som ändrats på commit
git diff [commit ID] // visar vad som ändrats sedan dess
```
