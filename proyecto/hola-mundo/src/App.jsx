import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName='midudev' initialIsFollowing>
                Miguel angel duran
            </TwitterFollowCard>
            <TwitterFollowCard userName='santi' name='santi gonzalez' initialIsFollowing>
                santi gonzalez
            </TwitterFollowCard>
            <TwitterFollowCard userName='vxnder' name='uno de por ahi' initialIsFollowing={false}>
                uno de por ahi
            </TwitterFollowCard>
        </section>
    )
}
