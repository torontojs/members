import * as React from 'react';
import Marquee from '../components/marquee.js';
import Status from '../components/status.js';
type Friend = {
  name: string;
  alt: string;
  image: string;
  website: string;
}
export type MemberProps = {
  name: string;
  pronouns?: 'he' | 'she' | 'they' | string;
  /** years of experience */
  years_of_experience?: number;
  /** url for gravatar or profile pic */
  avatar?: string;
  bio?: string;
  website?: string;
  github_handle?: string;
  status?: string;
  interests?: string[];
  music?: string[];
  heroes?: string[];
  books?: string[];
  children?: JSX.Element;
  friends: Friend[];
}

export function MemberProfile(props: MemberProps) {
  const { name, pronouns, years_of_experience, avatar, bio, website, github_handle, status, interests, music, heroes, books, friends } = props;
  const githubUrl = `https://github.com/${github_handle}`;

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

                {years_of_experience && <p>{years_of_experience} Years of Experience</p>}

                <img src={avatar ?? `https://placehold.co/200x200`} alt={name} width="300" />

                {bio && <p>{bio}</p>}

                <p>View My: <a href={website} target="_blank" rel="noreferrer">Website</a>|<a href={githubUrl} target="_blank" rel="noreferrer">Github</a></p>

                {status && <Status status={status ?? 'Never not looking'} />}

              </div>
              <div className='box'>
                <h2>{name}'s Interests</h2>
                <table>
                  <tr>
                    <th>General</th>
                    <td>{interests?.map(interest => <span key={interest}>{interest}, </span>)}</td>
                  </tr>
                  <tr>
                    <th>Music</th>
                    <td>{music?.map(interest => <span key={interest}>{interest}, </span>)}</td>
                  </tr>
                  <tr>
                    <th>Heros</th>
                    <td>{heroes?.map(interest => <span key={interest}>{interest}, </span>)}</td>
                  </tr>
                  <tr>
                    <th>Books</th>
                    <td>{books?.map(interest => <span key={interest}>{interest}, </span>)}</td>
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
                  <h2>{name}'s Friends</h2>
                  <div className='image-gallery'>
                    {friends?.map((friend, index) =>
                      <div className="image" key={`friend-` + index}>
                        <a href={friend.website} target="_blank" rel="noreferrer">
                          <img src={friend.image ?? `https://placehold.co/50x50`} alt={friend.alt} width="200" />
                          <p>{friend.name}</p></a>
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
