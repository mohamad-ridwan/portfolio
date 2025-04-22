import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Storefront from '../sections/teknikal/storefront';
import TeknikalWrapper from '../sections/teknikal/TeknikalWrapper';
import RealmInbox from '../sections/teknikal/realm-inbox';
import Lumina from '../sections/teknikal/lumina/lumina';

const Teknikal = ()=>{
    const { id } = useParams(); 

    const currentPage = useMemo(()=>{
        if(id === 'storefront'){
            return <Storefront/>
        }else if(id === 'realm-inbox'){
            return <RealmInbox/>
        }else if(id === 'lumina'){
            return <Lumina/>
        }
        return null
    }, [id])

    const projectName = useMemo(()=>{
        if(id === 'storefront'){
            return 'Storefront'
        }else if(id === 'realm-inbox'){
            return 'Realmchat'
        }else if(id === 'lumina'){
            return 'Lumina'
        }
    }, [id])

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    
    if(!currentPage){
        return (
            <div>
                <p>Page Not Found</p>
            </div>
        )
    }

    return (
        <TeknikalWrapper projectName={`Teknikal - ${projectName}`}>
            {currentPage}
        </TeknikalWrapper>
    )
}

export default Teknikal