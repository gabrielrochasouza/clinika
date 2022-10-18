import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 16px;
    margin: 0 16px 16px;
    background-color: var(--bg-s);
    border-radius: 16px;
    padding: 20px;
    flex-direction: column;
    animation: fadeUp 500ms;

    >svg{
        width: 10px;
    }


    @keyframes fadeUp {
        from{
            opacity: 0;
            transform: translateY(100px);
        }   
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }

    .profile-body{
        display: flex;
        width: 100%;
        height: 100%;
        gap: 16px;
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
        }
    }

`
