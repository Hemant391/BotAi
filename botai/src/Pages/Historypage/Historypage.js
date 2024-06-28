import styles from './History.module.css';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Pastchats from '../../Component/Pastchat/Pastchat';


export default function HistoryPage(){
    return (
        <div style={{display:'flex'}}>
             <Sidebar />
             <Pastchats />
        </div>
    )
}