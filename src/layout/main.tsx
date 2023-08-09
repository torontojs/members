import * as React from 'react';

type Props = {
  children: JSX.Element;
}

export function MainLayout(props: Props) {

  const avatar = `
+----------+
|  ___   o |
| /_|_\\    |
|~~~|~~~~~~|
|~~~|~~~~~~|
|   | \\__  |
+----------+
`;

  return <html>
    <head>
      <title>Evert</title>
      <link href="/assets/style.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
      <figure role="img" aria-label="ASCII art of a beach scene">
        <pre>{avatar.trim()}</pre>
        {props.children}
      </figure>
    </body>
  </html>;

}
