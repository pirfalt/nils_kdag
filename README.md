# nils_kdag

Labb där vi sätter upp ett "JSON över HTTP API" projekt.

Komponenter:

- [Docker](https://www.docker.com/products/docker-desktop) - skapa en miljö.
- [Git](https://git-scm.com/downloads) - versionshantering + github.
- [Node](https://nodejs.org/en/) - runtime för javascript.
  - [npm](https://www.npmjs.com/) - pakethanterare för javascript.
  - [express](https://nodejs.org/en/) - litet framework som förenklar node utveckling.

## Sätta upp projekt

Eftersom vi använder `docker` behöver vi inte installera mer än det på vår egen dator. `git`, `node` och övriga komponenter installeras i en docker miljö.

Skapa en mapp för projektet och öppna den i en terminal.

Installera ubuntu på Docker

```
docker run --rm -it -v "$(pwd):/home" -w /home ubuntu
```

Set up node

```
docker run --rm -it -v "$(pwd):/home" -w /home --entrypoint bash node:12
```

Peka port 3000 mot docker

```
docker run --rm -it -v "$(pwd):/home" -w /home --entrypoint bash -p 3000:3000 node:12
```

Om du inte redan har gjort det så måste du "clona" projektet från github till din projektmapp.

```
git clone https://github.com/pirfalt/nils_kdag.git .
```

Installera dependencies (ladda ner och lägg i `node_modules/`).

```
npm install
```

Starta server (skapa server fil), efter att docker har startat med kommandot ovan.

```
node server.js
```

Disconneta server `ctrl+c`

## Gör ändringar i projektet

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

## "Production"

Istället för att starta en miljö där vi kan utveckla servern skapar vi en miljö för att köra servern.

Bygg en produktions docker image. Kalla den `api_lab`.

```
docker build -t api_lab .
```

Kör den nyligen byggda miljön och ge den tillgång till port 3000.

```
docker run -p 3000:3000 api_lab
```
