import React, {useState} from 'react'
import LandingPage from '../components/Login/landing';
import LegalInfo from '../components/Login/legal.info';
import LegalBackup from '../components/Login/legal.backup';
import PhraseCreate from '../components/Login/phrase.create';
import PhraseConfirm from '../components/Login/phrase.confirm';
import CreatePsw from '../components/Login/create.psw';


const LoginPage = () => {
    const [page, setPage] = useState(0);

    return (
        <>
            {page === 0 ?
                <LandingPage setPage={setPage}/>
                : (page === 1 ? <LegalInfo setPage={setPage}></LegalInfo> 
                    : (page === 2 ? <CreatePsw setPage={setPage}></CreatePsw> 
                        : (page ===  3? <LegalBackup setPage={setPage}></LegalBackup>
                            : (page === 4? <PhraseCreate setPage={setPage}></PhraseCreate>
                                : (page === 5 ? <PhraseConfirm setPage={setPage}></PhraseConfirm> 
                                    : <h1>Frontend of wallet is finished. Now we have to make (crypto backend) and integrate with this. Then you can check the work result conveniently.</h1>
                )))))
            }
        </>
    );
}

export default LoginPage;

