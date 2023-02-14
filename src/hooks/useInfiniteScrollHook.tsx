import {useState,useEffect} from 'react'


const useInfiniteScrollHook = (callback:() => void)=>{

    const [isFetching,setIsFetching] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
    },[])

    useEffect(()=>{
        if(!isFetching) return;
        callback();
    },[isFetching])

    const handleScroll = ()=>{
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
    }

    const returnValue:[boolean , React.Dispatch<React.SetStateAction<boolean>>] = [isFetching,setIsFetching];
    return returnValue
}

export default useInfiniteScrollHook