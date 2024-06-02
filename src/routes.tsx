import { FastifyInstance } from 'fastify';
import { readFile, readdir } from 'fs/promises';
import * as React from 'react';
import { MainLayout } from './layout/main.js';
import { MemberProfile, MemberProps } from './templates/member-profile.js';

export function routes(fastify: FastifyInstance) {
  // mock data for now
  let fallbackProps = {
    name: 'Member Name',
    pronouns: 'Pronouns unknown',
    years_of_experience: 100,
    avatar: 'https://placehold.co/200x200',
    bio: `Hey everyone! Welcome to my little corner of the cyberverse! I'm happyfeet, but you can call me hap! I'm a dreamer, a music lover, and a bit of a tech geek. When I'm not exploring the digital cosmos, you can probably find me lost in a book or jamming out to some tunes. I believe in spreading positivity and good vibes wherever I go, so feel free to drop by and say hi!`,
    website: 'https://example.com',
    status: 'Exploring the internet',
    interests: ['Music 🎵', 'Science Fiction', 'Movies', 'Philosophy 🤔'],
    music: ['Pink Floyd', 'Daft Punk', 'The Beatles', 'Led Zeppelin', 'David Bowie'],
    movies: ['The Matrix', 'Blade Runner', 'Inception', 'Interstellar', '2001: A Space Odyssey'],
    heroes: ['Alan Turing', 'Grace Hopper', 'Ada Lovelace', 'Nikola Tesla', 'Marie Curie'],
    books: ['Neuromancer', 'Dune', 'The Hitchhiker\'s Guide to the Galaxy', 'The Foundation Trilogy', 'Do Androids Dream of Electric Sheep?'],
    github_handle: 'happyfeet',
    friends: [
      {
        name: 'Friend 1',
        alt: 'Friend 1',
        image: 'https://placehold.co/200x200'
      }
    ]
  }

  const children = (<h1>Members of TorontoJS</h1>)

  fastify.get('/', async () => {
    const name = 'TorontoJS'
    // TODO: fetch members from static files
    const members = [] as MemberProps[];
    return <MainLayout name={name} member={members} children={children} />
  })

  fastify.get<{
    Params: {
      name: string
    },
    Body: MemberProps
  }>('/~:name', async (request) => {
    const { name } = request.params;

    const userFile = await readFile(`members/${name}.json`, { encoding: 'utf8' });
    const userJSON = JSON.parse(userFile);
    const props = { ...fallbackProps, ...userJSON };

    return <MemberProfile {...props} />
  })



  fastify.get('/members', async (_, res) => {

    const getValidMemberFiles = (files: string[]) => {
      return files.filter((file: string) =>
        !['user-schema.json', 'template.json'].includes(file))
    }

    const createMemberList = (validFiles: string[]) => {

      const readMemberFiles = validFiles.map((filename) =>
        readFile(`members/${filename}`, 'utf-8')
          .then(file => JSON.parse(file))
          .then((member => {
            return {
              name: member.name,
              website: member.website
            }
          })).catch((err: Error) => {
            console.error(err)
          })
      )
      return Promise.all(readMemberFiles)
    }

    const files = await Promise.all(await readdir('members'))

    const validFiles = getValidMemberFiles(files)

    res.header('Content-Type', 'application/json');

    await createMemberList(validFiles).then(memberList => res.send(memberList))
  })


  fastify.get('/webring', async (_, res) => {
    const webComponentScript = await readFile('src/components/webring.js', { encoding: 'utf8' });

    res.header('Content-Type', 'application/javascript');

    return res.send(`${webComponentScript}`);
  });
}
