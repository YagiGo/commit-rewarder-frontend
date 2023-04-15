import "./styles/Home.css";
import Layout from './components/Layout/index';
import {UserProfile} from "./components/UserProfile";
import {ProfileContent} from "./pages/ProfileContent";
import {ApolloProvider} from "@apollo/client";
import {client} from "./services/apollo";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <main className='content'>
          <UserProfile />
          <div className='right-side'>
            <ProfileContent />
          </div>
        </main>
      </Layout>
    </ApolloProvider>
  );
}
