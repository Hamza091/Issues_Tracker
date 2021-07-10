import {useState,React} from 'react'
import './search.css'
import axios from 'axios'

export default function Search() {

    const [inputText,setInputText] = useState('')
    const [repoExists,setrepoExists] = useState(false)
    const [searchDone,setsearchDone] = useState(false)
    const [repoData,setRepoData]=useState([])
    const [reposName,setReposName]=useState([])
    const [newIssues,setnewIssues]=useState([])
 
    const headerss = {
        "Authorization":`Token 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`
    }
     async function checkUpdates(){
        if(reposName.length>0)
        {
            console.log(reposName)
            for(var i =0; i<reposName.length; i++)
            {
                const newIssues=await axios.get(`https://api.github.com/repos/${reposName[i].inputText}/issues`,{
                    headers:headerss
                })
                let temp =reposName[i].latestIssue
               
                if((newIssues.data)[0].number>temp)
                {
                    const elem = document.querySelectorAll('.repo-info-body-newIssues')
                    elem[i].innerHTML=parseInt(elem[i].innerHTML)+1
                    console.log(elem[i].innerHTML+"done")
                    let old = [...reposName]
                    old[i].latestIssue=(newIssues.data)[0].number
                    setReposName(old)
                }
            }
        }
    }
    setInterval(checkUpdates,60000)

    // thenewboston-developers/WebSite
    // https://api.github.com/repos/thenewboston-developers/WebSite/issues
    async function Search(){
        try
        {
            
            setrepoExists(false)
            setsearchDone(false)
            document.querySelector('#search').value=""
            const response = await axios.get(`https://api.github.com/repos/${inputText}`)
            // console.log(response.data)
            setRepoData(response.data)
            setrepoExists(true)
            setsearchDone(true)
            
        }
        catch(e)
        {
            setsearchDone(true)
        }
    }
    const closeDiv = () =>{
        setsearchDone(false)
        setrepoExists(false)
    }
    async function trackIssue()
    {
        
        setrepoExists(false)
        setsearchDone(false)
        const elem  = document.createElement('div')
        
        let p=document.createElement('div')
        p.classList.add("close-div")
        p.onclick=function(){
            const del = (elem.getElementsByTagName('h1'))[0]
            setReposName(reposName.filter(repos => repos.inputText!==del.innerHTML))
            elem.remove()
            
            // this.document.querySelector(".repo-info-body-issues").remove()
        }
        elem.appendChild(p)
        
        elem.classList.add("repo-info-body-issues")
        const h1 = document.createElement('h1')
        let e = document.createTextNode(repoData.full_name)
        h1.appendChild(e)
        elem.appendChild(h1)
        
        
        p = document.createElement('p')
        e=document.createTextNode(`Owner: ${repoData.owner.login}`)
        p.appendChild(e)
        elem.appendChild(p)
        
        p = document.createElement('p')
        e=document.createTextNode(`Description: ${repoData.description}`)
        p.appendChild(e)
        elem.appendChild(p)
        
        p=document.createElement('p')
        e=document.createTextNode(`Archived:    ${repoData.archive?'true':'false'}`)
        p.appendChild(e)
        elem.appendChild(p)
        
        
        p = document.createElement('p')
        e=document.createTextNode(`Last Update: ${repoData.updated_at}`)
        p.appendChild(e)
        elem.appendChild(p)
        
        p = document.createElement('p')
        e=document.createTextNode(`Forks:   ${repoData.forks}`)
        p.appendChild(e)
        elem.appendChild(p)
        
        p = document.createElement('p')
        e=document.createTextNode(`Organization:    ${repoData.organization?'true':'false'}`)
        p.appendChild(e)
        elem.appendChild(p)
        
        p = document.createElement('p')
        e=document.createTextNode(`Open Issues: ${repoData.open_issues}`)
        p.appendChild(e)
        elem.appendChild(p)
        
        
        console.log(inputText)
        const res = await axios.get(`https://api.github.com/repos/${inputText}/issues`)
        const temp = [...reposName,{inputText,'latestIssue': ((res.data)[0]).number}]
        
        setReposName(temp)
        
        p = document.createElement('div')
        p.classList.add("repo-info-body-newIssues")
        setnewIssues([...newIssues,0])
        console.log(newIssues)

         e=document.createTextNode(`0`)
             p.appendChild(e)
            elem.appendChild(p)
        document.body.appendChild(elem)
        // elem.appendChild()
    }
    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" onChange={(e)=>{setInputText(e.target.value)}} placeholder="Search Repo..." id="search"/>
                <div className="button-container">
                    <button className="button" onClick={Search}>Search</button>
                </div>
            </div>
            {repoExists?
            <div className="repo-info">
                <div className="repo-info-body">
                <h1>{repoData.full_name}</h1>
                <p>Owner: {repoData.owner.login}</p>
                    <div class="close" onClick={closeDiv}></div>
                    <p>Description: {repoData.description}</p>
                    <p>Archived:    {repoData.archive?'true':'false'}</p>
                    <p>Last Update: {repoData.updated_at}</p>
                    <p>Forks:   {repoData.forks}</p>
                    <p>Organization:    {repoData.organization?'true':'false'}</p>
                    <p>Open Issues: {repoData.open_issues}</p>
                    <button className="button issues" onClick={trackIssue}>Track Issues</button>
                </div>
            </div>
            :!repoExists&&searchDone?
            <div className="repo-info-error">Repository doesn't exists!</div>:null
            }
        </div>
    )
}
