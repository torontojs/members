TorontoJS public members directory
==================================

This repository contains the Toronto JS public members directory. This project
is a work in progress and may never complete.


The idea
--------

We're making a website hosted at `https://members.torontojs.com/` at this
location community members may make a profile page at for example:
`https://members.torontojs.com/~jen`.

These pages contains some information like a name, interests (react,
typescript, etc), links and job status (seeking, it's complicated).


The aesthetic
-------------

We're going for an old school terminal/bbs vibe, similar to:

* <https://adventofcode.com/>
* <https://int10h.org/oldschool-pc-fonts/fontlist/>

Ideally profiles can be rendered in ANSI in a terminal. Profile pictures
must therefore be ASCII art.

Profiles should be mostly monochrome (black and white or opposite), but
each member may pick 1 highlight color, so every page looks a bit
unique.


Creating a profile
------------------

This is a site for developers. To add your profile, you do a pull
request on github. Usernames are first-come-first serve.


Future features
---------------

If we want to add more interactivity later, I think it would be fun to make
most things actions developers can do, for example:

* Want to change your avatar? Use Postman to do a `PUT` request somewhere.
* Want to list your blog posts? Host a RSS feed somewhere
* Want to list your friends? Host a JSON file somewhere.
* What to have a Bio? Host a [fingerd](https://datatracker.ietf.org/doc/html/rfc1288) somewhere.

The idea is also that these have a variety of difficulty so participating with
the members directory is in itself a type of challenge and a teaching moment.

A much more advanced feature might also be some intergration with the
Fediverse/[ActivityStreams](https://www.w3.org/TR/activitystreams-core/),
or parts of the [Indieweb](https://indieweb.org/).


Running the service
-------------------

```sh
npm i
npm run start:watch
```


