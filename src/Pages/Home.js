import SideBar from '../Components/Sidebar/SideBar'
import NewsComponent1 from '../Components/NewsComponents/NewsComponent1'
import Card from '../Components/Cards/Card'
import LatestNews from '../Components/Cards/Card1'
import Slider from '../Components/Cards/Card2'
import BreakLine from '../BreakLine/BreakLine'
import CurrentNews from '../Components/Cards/Card3'
import VidioCard from '../Components/Cards/VidioCard'
import DetailedLatestNews from '../Components/Cards/Card4'
import VidioCard1 from '../Components/Cards/VidioCard1'

export default function Home({ articles }) {
    const latestArticle = articles.length > 0 ? articles[0] : null;

    return (
        <div>
            <NewsComponent1 articles={articles} />
            <BreakLine />
            <LatestNews article={latestArticle} />
            <BreakLine />
            <Slider />
            <BreakLine />
            <br />
            <VidioCard />
            {/* <CurrentNews /> */}
            <BreakLine />
            <Card />
            <BreakLine />
            <DetailedLatestNews />
            {/* <BreakLine /> */}
            {/* <VidioCard1 /> */}
            {/* <SideBar /> */}
        </div>
    )
}
