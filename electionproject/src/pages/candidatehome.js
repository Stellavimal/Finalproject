import img1 from './vote.jpeg';
import Canavbars from './candidatenav'
import Footer from './footer';
const CandidateHome = () => {
    return (<>
        <Canavbars />
        <div>
            <img src={img1} width={1550} height={600} />
        </div>
        <Footer />
    </>);
}

export default CandidateHome;