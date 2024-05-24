import * as React from 'react';
import { MemberProps } from '../templates/member-profile.js';

type MainProps = {
  name: string;
  member: MemberProps[];
  children: JSX.Element;
}

export function MainLayout(props: MainProps) {

  return (
    <html>
      <head>
        <title> Members of TorontoJS </title>
        <link href="/assets/style.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <figure role="img" aria-label="ASCII art of a beach scene">
          <pre>
            {`
          +----------+
          |  ___   o |
          | /_|_\\    |
          |~~~|~~~~~~|
          |~~~|~~~~~~|
          |   | \\__  |
          +----------+
          `}
          </pre>
          {props.children}
        </figure>

        {/** TODO: list member profiles */}
        <script async src='/webring' type="module"></script>
      </body>
    </html>);

}
