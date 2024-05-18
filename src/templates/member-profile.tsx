import * as React from 'react';
import Marquee from '../components/marquee.js';
import Status from '../components/status.js';
type Friend = {
  name: string;
  alt: string;
  image: string;
}
export type MemberProps = {
  name: string;
  pronouns?: 'he' | 'she' | 'they' | string;
  /** years of experience */
  yoe?: number;
  /** url for gravatar or profile pic */
  avatar?: string;
  bio?: string;
  website?: string;
  githubHandle?: string;
  status?: string;
  interests?: string[];
  music?: string[];
  heroes?: string[];
  books?: string[];
  children?: JSX.Element;
  friends: Friend[];
}

export function MemberProfile(props: MemberProps) {
  const { name, pronouns, yoe, avatar, bio, website, githubHandle, status, interests, music, heroes, books, friends } = props;
  const githubUrl = `https://github.com/${githubHandle}`;

  return (
    <>
      <html>
        <head>
          <title>{props.name}</title>
          <link href="/assets/style.css" rel="stylesheet" type="text/css" />
        </head>
        <body>

          <div className='container'>
            <div className='col' style={{ width: `300px` }}>
              <div className="box">

                <h1 className="hero-title">{name ?? `Member Name`}</h1>

                <p>{pronouns ?? `Pronouns unknown`}</p>

                {yoe && <p>{yoe} Years of Experience</p>}

                <img src={avatar ?? `https://placehold.co/200x200`} alt={name} />

                {bio && <p>{bio}</p>}

                <p>View My: <a href={website} target="_blank" rel="noreferrer">Website</a>|<a href={githubUrl} target="_blank" rel="noreferrer">Github</a></p>

                {status && <Status status={status ?? 'Never not looking'} />}

              </div>
              <div className='box'>
                <h2>{name}'s Interests</h2>
                <table>
                  <tr>
                    <th>General</th>
                    <td>{interests?.map(interest => <span key={interest}>{interest}</span>)}</td>
                  </tr>
                  <tr>
                    <th>Music</th>
                    <td>{music?.map(interest => <span key={interest}>{interest}</span>)}</td>
                  </tr>
                  <tr>
                    <th>Heros</th>
                    <td>{heroes?.map(interest => <span key={interest}>{interest}</span>)}</td>
                  </tr>
                  <tr>
                    <th>Books</th>
                    <td>{books?.map(interest => <span key={interest}>{interest}</span>)}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className='col'>

              <div className='box'>
                <Marquee>Looking for work! Hurry now! Gonna be off the market soon! Selling like hotcakes!</Marquee>
              </div>

              <div className='box'>

                <img src="https://placehold.co/400x400" alt="placeholder" />

              </div>
              <div>
                <div className='box'>
                  <h2>{name}'s Friends (Top 8)</h2>
                  <div className='image-gallery'>
                    {friends?.map(friend =>
                      <div className="image">
                        <img src={friend.image ?? `https://placehold.co/50x50`} alt={friend.alt} />
                        <span>{friend.name}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  )
}
