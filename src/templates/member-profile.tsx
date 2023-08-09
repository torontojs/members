import * as React from 'react';
import { MainLayout } from '../layout/main.js'; 

type Props = {
  name: string;
}

export function MemberProfile(props: Props) {

  return <MainLayout>
    <h1>{props.name}</h1>
  </MainLayout>

}
