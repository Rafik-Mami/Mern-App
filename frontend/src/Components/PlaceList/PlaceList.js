import React,{useEffect,useState} from 'react'
import { getPlaces } from '../../JS/Actions/actionsUser'
import {useDispatch,useSelector} from 'react-redux'
import BeautyStars from 'beauty-stars';

import Rater from 'react-rater'
import Rating from '../Rating/Rating'
import './PlaceList.css'
import { Rate } from 'antd';

import {Card} from 'react-bootstrap'
import Place from '../Place/Place'
const PlaceList = () => {
    const dispatch = useDispatch()
   /* useEffect(() => {
        dispatch(getPlaces())
    }, [dispatch])*/
    const places = useSelector(state => state.placeReducer.places)
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    const [rating, setRating] = useState(3);


    const HandleChange=value=>{
        setRating(value)
    }
    
    return (<>  

    {!isAuth?
    <>
    <div className='three_card'>
    <Card style={{ width: '60rem',height:'44rem' ,marginBottom:'15px' }}  >    
            <Card.Img variant="top" style={{ width: '58rem' ,height:'30rem'}} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREONcXbgalqEyNvQUFMBUBEU7MrpwrGi3aDQ&usqp=CAU'} />

                <Card.Body>
                    <Card.Title><h2>Gabes</h2></Card.Title>
                    <Card.Title>Gabes is a city in the southeast of Tunisia. The largest city in southern Tunisia after Sfax, Gabes has the distinction of being both an oasis and a seaport. This port function dates from the industrial development of the 1970s</Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">Sud of gabes</Card.Subtitle>
                </Card.Body>
            </Card>
            <Card style={{ width: '60rem',height:'44rem',marginBottom:'15px' }}  >
            <Card.Img variant="top"  src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaGhoaGhwcHCMcIRwcHBocGhweGCEhIS4lHB4rIRwaJjgnKy8xNTU3GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKoBKAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAPxAAAgECBQEFBQYDBwQDAAAAAQIRACEDBBIxQVEFImFxgRMykaHRFEJSscHwBmKSFSMzcoLh8VOissJDk9L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAnEQACAgEDBAICAwEAAAAAAAAAAQIREgMhMQRBUWETFIGhIpHxcf/aAAwDAQACEQMRAD8AL9nXpUjLLRwg61Iw6+seAB9mXpXfZ16UyMPxioKDrQoD7KnSuGSTp86L7RZi/nFWeAJJgUAA5NKt9kXqauMZOWFEd0USXXyFzQC/2QdTVvsvjVMTNg2XbrzQHaT7x9TQg6uT8flREyPU1n4GYK81qZbPal2AI+dASMmg3mg4zYaEWnwB2pfOuwgyYM81nF6A9HgshEqRtsf1msvM4ikyPWkPaVxxKAeWodeaSGNVvtBoUYY1UNSxzFD9rUA4cSql6U9pUq9AMh6szzvQsNSaZTLsSLCKAGr1JerYuVMwBQTlm2kUKTrqGeqNlX6fOhMjj7p+FAGL1X2lLsW6H4VTUaEsb9pXe0pTUa7UaCxr2lQcWlZNRegG/a1wxqTLVE+NAOnFqaRnxrqhT0QU1OuN6sqHwqSpO9aMEqLTXLBk9N6r7MVKNHNqAGEQ7SDVXIIhpji96K0dKroHWhTPbC6GhMpFaZwh1rvsw60shmhD0riDWmMoP2aq2S6T8allozVmmcKaK2VPU0I4cc/KgG3QMgUkC8zE0F8gOGoaz+KiD/NQou+SI2NBbLsKfUjk1xj8RoKM32RrvZGnX0/i/KgOyj7wpYoAyGuVB1+VXOIv4vkfpVfaL+L4A/qKAKMFeprig4NUGZXqfgKlc0Op+A+tQodCBzTAx6zxmh/N8B9aMM0nVv35UAy2YqpxaAc1h9TU/asL8R+f0oC7YzdDVTiHofhVGzWF+I/930qVzWF+L/y+lAGTFbkGodhQxj4Z+/8AOqtip+OgIdx1pdyKI2Ng8uPST+QtQnzGCNmJ/wBJ/Wlgp61YDxpZ86v3U+Job5ydlA+f0qgcZPKqBfAUsM74L8D9ao2aP/AFCD4wQeldSAzhHT1A+lRUopvDtEdPnVh2n51lEjpXah0+dbaOORpHtEdK4doDxrMMeNRH7/ZoMjV+3Cu+2r41letd60LZqfbh41wzo8azAPH5VbQPxfKpYTND+0Ok1J7RNZ3s/wCYfP6V3s/EfH61C2PDPtQ3zjeFKjCPh/UPrXexPh6EH8jUtFDnMt1qPtDfiNUGVYmB+R+lUfLsP2fpTJCmXbMH8R+NDbF9aqUNXXLk7VHJFSbK+0qpejHJvtp+Y+tVfKON0b4VMkXFgtVQWov2Z/wt6A0EoamYcWQWNRqqy4THYE+VV01chR2s1BapC1wSllogtUFqKuAxMRep+ytG3xMfnSxTAaqjVRjl2HHznw43qPYHy85+lLFACaiaM2GP+f3NcMMfsxSxQA1UmmRhr1j69K4Ya8kfH98daWWhaopoYAIketxQ2wxwauQoDXUT2X8wFd7Mdf38aWSgRrqJ7P4+lTTIUaFdRfZfuK72PjXQ8WaBV1HGB41wwfGgzQvXRT2L2e6AFlZQdiQQPj1quXwFLorEgM6gkXIBIBPoDNYc4pWdIpydVuKKKfxuzWRAzsizfSWlt42E+B8jU9n5T2mLpX3AxuZEi4E76Zt5TVu2SzsSNiWvvJ1xAsJjSAP8nrXCWtvUT1Q0drkP5X+F2dSVxE1gIdJn7zspBIkgiFJts425zu1OycTAYqwBIAMqdQg+MCmMhiuz7wJAZi24nkixNvIwK1mdMQgKxWCdOq+q+4bgTyetcfnlF77nR6EWtjyRWuCTXqXy5w2h1Qm3vKHEbzcEbjpxVXZIgKm8yFE6oFpAnTvbY26Vr7S8HP678nnXyrqYKMPQ80MEjmK3mw1mLSePntxvVHQbCekH5fd3iPjUXU+UHoeGYwxG/EfjVlxW/Ea08TLiDYE9LTbgVVsmmmwvYTPPqY2Bra14vkfDNcCHtm6/IH8xVfaHoP6R+grQfsvbvEW5HPhtNQ3ZtrNtv974bdPnV+aAw1BI4o/Ah8wfrV1zA5w8P4fUmr4mRYbX+Vut6Gcqw30/1D61pSi+DDU0EXMJ/wBNfl9KlcTD5T6flNC+zt4fEfWoGE3hbxH7NP4lykgns8EzZwfQ/rVRlcOffYea/Q1Hsj+yKlcJuL/OmxVKXgh8ghNsQeqkfPmqp2aJ99COgaJ+NGXLOSAFJJMARcnwFQENT8lt+CH7NINtSk9CD8Jg1TGybwBpY+IAHM3g3/d6uFNFV32BbwE+nNT8lT9Ga+ARuG9bfmN6Jh8wCY3IMx8K3MDCxTcMAp2k/KwF7+FF0/jN5NtIbyvBuel/OjbNpJs88Rq4Jj5DnyFUGEOgrSzWGWe+hZPvE6eIHu94m34aLl8gig97W4gaAQYkgNJtEXvF48axltyXG2ZBwR0qnsJ4/fxrZzHZw0ly5wxYDTfoPvEX25+9Wbiyg/Eb7kRvAvETTP2Rwa5FzlR0oZwPD860FaTCg3W5bYNPEEk+kbVIxSI/u0Y7xrK8D3SHBO/jU+UuJnjBHh8a6t84aMBpQBmnutid3SADcmxnzPuk7xXVPmGAnVkUHckDrE1TVXaj0/SvdZ8ZD+CmWHvvim33UUeUEufyp37PkmWFxsZGtdlVhHIhIPz55rD1VoYWdUAD2GCT1YMT83iucl7Z1hNJ8IdzmVXH93OKAAAAyuthAkmImAvXpQsPssK+oMjKJjTjKSfMNpP3ZsOeosHCzrgyBh+XskMeUrNOf2ozAK2HhNHVdP8A4kR6VxenSpHqj1TbtpWa2W7KbdEOneVZWkkACQr8Rx09Tk57sfELFijKATHdYXAERIHJPlbxqcPtCDqGDg+Ehm/NzTC9u4o2Ci8yC4PkO/ZfDa1cvjadpnZdVFrdC+TyzQMJVAbSQznS2kOyyR+JoCqADPdO1X7K7LUOS5LkO2GNUaYU6Q0SfLwg0XD7WOsuUUsfeOppMCBJJNr0TC7XCRpwQIJI77WmSfzrnKE96Oq6jS2sezmU7gcO6oI0gHTuDBAtB+NI/wBjypfWxEX22Mgczwa5u2j/ANJI6SSONpmNh8Kt/b7Af4KerE1zWjqFfUaPl/0DHYon3iIN7TG0yQRNh0oT9lYgA06XXpYeRv16zRv7eYbYOD6gt+RFcP4jxR7qYQ8lbj/X8qvw6noz9jS9iWH2Zi657wsSo06lNiRJExxf5U8nZOIILKqjgMYF43UAnjpUH+JMwf8Ap/0n/wDVCxO3cdpllg8BBHzmt/FLu0F1OmvJptjoBHtUG22pjbcyqECb2B5iqu2X0iy6hYlVaSPM6b7bg7VhYmbdt4/oUfkKocY/gUx5/o1FoLyZfVrsv0auFh5ZTJOMxgAe6IA2HvX8/E0zhZrLKCow3iSQNS90+BidrXm1YyZm18JT6uPjLGrYWKv3sKfJyv6Vv46Of2b/AMHsXDyzR/d4lhFmUdbzpmb71IGBYBcTu7d5Okf9O/rSJeTZQo6apogI60aoLWbDaMLTpCuAJI76WJABI/u9yFF/CiZU4aGSrtuRLJYkgyO5vSumdqKuVkTqEzttA6kmB8CTU/JqOo3waC53DAshDcNqEjvA2IAvSj/ZyoU4cRN1Cg3jfrtz41TFyhXdliJsQxnpCyZ8hzWfh9oYatDqSe97zeyXuqzXZhMnTAEX1C9Tg0pTkzQfLZUgDTighpkRtGwEwL3kRQznMtgtqDsX0xpfD12kGff7ptAvyfTPzvbyLPs1UCSBI1au9YguxK26T+teczDtqEA9ZvM+e8zzVe6qzrFNbujd7U7URHcKkOLXJlTHvbwCLQL+O1Y7Z4Oe8k2EnUwt496OOnSkkgnvGATc7m5uQOTRUdEEiTqNlbvEgTBNtI54+tO25XvuaGHJICgaIIAPeEjvXlRa8TB2quqGAKSQTpMyRIi0Ta+1JjPuRZdIieltgR/xV8JnYkMCfG4NhvMAz9azugM9tDTGvSrgTCtvtvAiefCgpiR3TBkEcQNSnSIOzTJ9JobY5HdYgrfSp7wnixEVZcwhAIwkJY8aviRqiPICq3ZkJi50OqrIEEXXuk25gTF/jQcJhJAYGWm5BttaBG1/zoGMuoypRGBmCrKCI2BEgjzijZPs/FubMLzoOv4xMesGj4KhvGwcMSTiESSdOiQfvQDqEACw4rqpmMJZGpTaRuFja+xrqzYobD8TY8TUWpXUK4+dfQPjUNgDqPjUgjrScV0moMR4GijzrNDmrLjmstFqjTU1fXFZq5mirj1Gi3Q+jg1YMKzxmPCpXNCsOLLkh8kVEDrSRzA61RsXxpiy5I0JX9/sVGpeorPGIag4lMWayiaXtB1qfaL1rK1VYP4VMWFKJph16j41GtetZRxDVDi9aYlTRse0FSMRaxfa13taYlyRsa161xxV61kaqsrVcSORqrjeNHw80OtZSR1oyJPNRxQUjcTFUxJt86OMQj3WaObwSKycAcUwNXDVxkq4PVCXkK2WwrmMUDbuONzFj3TN+I6UnmuyMDSRLI82dk1HeI7ndZZG5nawrRyuBiP7gDRuNQX8yKPn+z8ZcNy86Qk2xDKkFVECSBvPdH3SOasW+52W/B4rF7Ge5V8N5kyG0G250vefSLGu7P7E13Do8bjWoNjsL7+dQcNlJAIeP5TvxFjI8658B9QZkki8zYkXAi4PSDWXK+50qh1MpoBlSPuWhiCdpCny5+dMYmDhrZWJYQGDLp0+XeJNItnsFFGGMGO8X1FlLm0AFjA0xwFAmqfasuZlGDG5IdfjEj5VhGhzFwNQunXcKxvFwxJI55H5UjidnhSLLfa+/wADRsvjKDKDcR3iB0Ntwdhe21Cd594T/rHyBH6Vu0ZaL5bI6ywVAxCFjEkkDb8x5AE8Us+Gk2UKQfEHw5j4Vp9l9qNlyzIklhpgsSAJnhZ3HXrSwR8QkjDJY3OmY+tZbXYJA8PMgGWTX4sZjyJkj481Nc2TYbpHg2ufSSJ/fSuqX7KZ+oV3tKCTXGvpHxEH9rUHENBBrpoUL7Su1UIGrUAQNVtVCBqy0I0EDVOuq6amoSi64tFXEFLzUUI42N6h4VbXSgNERGIkKxHgCay3Q+NvgODUT41y5dxHcYXjYz8N6dy/Zzsb6h1lT8p3rD1IrlnWPTaj4QlUaafzGWTDjW5WZ3ji5PGw86rkMJMbR7N1Oo6YJhpJgWkRf4jmsPWijtHodV8V/Ylprhh16H+IOxPsyI2rWXZlgbAASDM715vM5x9JCYRmw2JCkmOn6xap88expdJNctF2SrJhWk7U92RmrIrq5Yez1QpIbSGLxwOPOtzM5xCuGEUgopBZxu7QI96SwImDMg8b0er6Oq6Vef0ebwsFiLKT5Cacy3Z2K91w3jrBA+JtTC9p5lF0qrJI2VANW4kWJjfc9b70jmExHu2YOICdRR9GJpJk95HRtMSQNwODzWfmvsaXTJcsYOGQ2lioPI1qT12Bma0st2biuhZV1QGIXZjpjVpBibmN96wVVx3w6JpIMLhRGmD7qKo4HF61MbtnMIndl2OpgyK6A62Bkae6w+9E8Hm1YcmdVpRS9iydo4yL7RFbCHult2HgwN12PHFP5fLY+OQDmAS03JZtpbujkbdIva18Vu0cRCC5OlkLFQzBkaRqPBAiLAkedVzOdGMyjDUt3VVjAB1ASe9Pnc27u9Yfs3GkM5Z0YnW7ppBMvg2JkAAENeSd/PxpvDypI1oyOOSs2I0hpnpqXpYisLs3O5lMQM+GWUs2gOpUMBJKlpCt3d7ld69L2UQiF30ohQjSrFwdWhtYVdKr7iXGqdjaKkorsaTsAcm9/wDD3vK9TEhT4+FKr2dhuQrrhmbzqCgCYmNJtPSqZ7Gwmdh/eOPxBrbzcO8c/hi9hS5wzqLqcS19TaCST0CyT86zFFZbM9hIjlTKd3UGvEE6RJkAAw0b+7Wnkv4bwWQuHf8AulLuWZjIAmyg346DqDvWQnbWa9qHJYBRpUlE9xASAO5Y+QBvFamR7ZbE9iuZUvKEuxZVLMVtsqaQs7Wkj49ewUXdox83l1A1YbupgsQw1q629zVcnf8Ap5mzeY7OOAoxHKpaJQqjzMXAYk8012p2vqxWTCwiyAkIrKyKqhFsSXKN3tTbRLdTfPbMlyyeyW4kEzpEqPxKZgmLcismb3NgHLvgnFXMYmsqe5/MJBU6gZuBeQL8bV1YLOq6MN3UsQCVm82vOn8yDeuqWi7GTUiorq+nZ8U6uqTUTUstFprpqoFcaWMSy1Oqh6qlQSalm1BhfaV3tKqEMxzfa+1uK0uzM0mAdYK643ubGxAg284NcZ6yittzrp9O5PfZDGQ7DxcQaoCDq0ifQD861F/hlADqxGJ/lAj1mszG/ibEOxYDYTAHpbxFA/tl76mduRDkR4QoAryS1tR96PfHp9GK3Vmk38O2tiT/AKIt/UeK5OyXSdL+Vj+QN/jNZqZ1zsGIvBZ22/q3+NWwXxW952gnbUTHz2rnKc3yzpGGmtoobbs9x99haD3SADHBXvHzmp7Ly/2fUpJedhpeARMwCRc23oqKB1HWHYeHDeNPIhiRqG12aw+U3/ZrNyZ0cYxEMwNYhlI9AYJ3i1qBlcq6GcN2WDqHdXeCp2a5uf6j1Nazva7+gE+NySKomMoEEBjsSNXpAnu28a2oyoy3EWUEFywLllVQNgsAhtO8cbXtVkzAYKjKEQENCoZJAKyXOvVbkj0FHxs+qXKRePdJ4J4JIsN4oJ7Uw+V/7GPxkVMXdug3YLATQADiO5Goh9DQSZOywRFunFxFMLmDpN2JJLEhWFyq2uwm6+e3jI27Yw/wN/8AX9TVF7XwZgo0ddHG0nvW8q6KUlxRzcUxrtXPjECzhYbsF06nUhhBJAEOAVkngxXnMdcQgkYKozQG0vAKrESTJje0xvW2O0csZnWCBezcQBMPySL1VcbLOxAI2BB0tefwk9Lb1HN+EFH2Ay+ZdB3g7Em5UA2OwJAAMUPtbOO6DQTOGDYkgsCN9omViJHvVpf2PhMC40AK0E6tMN0Jm3FVxuykRQ2qATYq8zN+J+Jpb7loy8tlE9phu+ZRwhBZHTEggEEqQyEX2jmtXE7SzBI9i3ZygKBCo4LRckD2cgTHdpLM5dU7wbEYyLBwBHm249D86xczn3taOhEX6GY38IqqWxhwo9T2PhZY62zr4b4pLWQNhIFIKxqUKHYiSYAI1EGatm0yuEiDBxDobV3GbWBxbULqPH5zXi872o+gLNxvoIE+EgAEVOV7RVyqujKFUCSxgxG+1zcmPGtphUnvwezTHhZCIwgxpW8naQSbT0iB5CiYnbeWXD1Y+EUKiLIVdiWN59wALG4Ox2rzeXzWCVKoyKB+IgRvtIuD5+dWwSjOMN8REBLAFYcE2j3SJtqnpHnWd/BtKL7mvlsVHLOsFdbadW+iTpuDvA4jY1sdn5bDxnCDCQMRMlRwJPeAmbf715bFzmHgghMQYoDMCAumCo3S5BUkxxzRsDtcRqVnRvAmR1iOCLetdVi1Xc5tyUtnaPSY/ZeHjY32dSqthkglAEBJUMSQJLQAFBttHjWfnOw8BS4VsQMhIJBDAkGJ3kNvYSbc1bL9pIVQnU5xHOGxR9GlCFDM4AII7zbj7pvSHaiKuK5VgysWKggCFJmx3jYwI6RWGkiptmb2tlPZtBvIm9oO3fidMk8nV1Arqvn9IUrqEagWKFi2oBok7x3mgbXrqza8F3MWOKitbCz+GGPf6bCIsd/O1NY2IAiEL3nJ0bTqMAdOq7nrevR9j0eVdIvJh/Zn/C0ddJomFkXa+loHgST/AJRz8h405idm65OLiYrAASRp94kTpQCLSeem9aSKERVBMKCLKYt0PFgGvyT5nlLqJdjrDpI3uZTdn4i6kVNXV44se6WsNtxfcc1dOx2KyTFpMgzM7LEzWkcZlM6hGkkAtpJM+6CTBNv3NZT9u5jvD2RWPBmiDBEyAT/tWfsSN/X0482OL2ThiA2snkggAHpcX2rsTs1CkIWDorMxAiSpuL3B0z8PWs3C/iTHIiBYe9pkx+ICb0ZO1sVXIbEw3UE6iFAiDYqdJvyLHasvUlLk3GGmuECXKcaS5HgxMTOwm+9/2SaNJMIBae8Y6+EeFzWvkM26k+1OpTdWSNtoMKBPgRTDYuA42VDF21BTO0mFGo+lYNf8PMlzqN1U7yO74bxcR41AU8AGb2jmd73rTzPZeozBIO14B8SBb1saVxuwgsGYuIhz+UE1DLsVBeAdYtFgeu1hb4Vo5bNhdIYEmOQ19z96+woeDl3BkSCfO8ef5eNS+VvLg9QSJ44n9Kl2WLa4Gf7YVnshgAw0Rpgy2lTF4G5PPlXY/bEmdDGTboB8drdd6QIwlOqS0bjfcCJMiNhV1zSAaRgLccAzBme9HU9aqbXA55CL2wrEg9Ld4GTwBxf9ajE7ULLCqUsTJib8Hw8qU14Rb/DSedTkG/HIJ9elUXHCzCJJMd8WFohTG3HP6VXJsLYqcRh95t7gGN+8TxHz3phc4VFyb2F54BuxmhK5E9xI5ABIWP5t4g2FqHh5ggt3EYRMBUleJWQx9ayWw6ZokknWLcN68C3G4qXzveMm3SQf0t577TNCGKCWU4CHn3RAt4xvahLjLJIw1QERAVhbeWh9gY+7QX7HlzdgVURtchj0uQPKhNmZloWCdrQYi+8/PilExUH/AMC3uxV2jzAJFud6u+IhB1YQYTAOtx625ilEuwjZkAhoBnaNgOne4G3pRBn1VgyrzvAiDuSBef3zSy6NMKq6Qbd9zE7b7SD896LlsvhyJlNhdxETIM789atECP2rik2IAmxUC+8e9x5UNs45sGvctfV6bAiKtmMuimz8T915kwDIbrx+VKIWVu9oa2xmdusH9athl2xZFy0jwBPzHzNKDKq5GqNF2HvKQelrdOKbZDB06YNjv8NjFrXoaYDLBCSP5WWZ8ibi1EZoFhd3+7XDV0Jli42OwmDqmOfE9aawsFASQqTc3Z+QQdMm3PXmhPhuGkgiSIIYSB6T42pxcso7zkze8fCtZPyRRE0yqiYIESbMW8dtdqMO5BLMYEDvWA5garz61GKmHB0Eat4nr4fp41n5t30xKjjz+W9ZyLRqdmZ18IsMDE0EmWsjExP4lJ5mAaey3abBy4xiHaZbugmSCZEQLgbflXk8PWDZZ6xuTtMcmr4KwT3T4yL78epqu/IWx6f7ZjYbu6Yg14neckCWNuII36Cdq6sPGzGJ3dOxA4mJM3nwHzrqZMtGlmcJXQayo04cXMaWO7NsJt4878MZrMB1GqfeVk+9pIi6Hy2nwrCfMkk3gmQZBN/GdtvK1CCGRDTwB8rX8eKl2XJLg9K3ap0ghQDN2MExMlbWAtefHqaycx2sTOmOYkg7eW/O9VTCJJEAahpsQbi5tPT9dq1ct2EmhdbvO8ACI8QRRRsjlJmWM7iOjKzgBfxQL8eJ8q5F0pJfvQI0309T4Dj4V6Udi4bKrEvfjUsiQDBhCOTb+U71V/4blZwWMxIGJI3mNJFl8JB8xUqi0zy4dAY1AmIBFvGOI9L01l8QRIUjktbaYuenl0rsXBKSHGhpE7k+sLY+VSuMmogBh0cgkH57cTQzQzh4o21XPHntE1r5HBRkJOsNHURNo4FvpWFl3JDEkkWEBYI8oN+L0zg5sjcEDxBBBvuS0E1KNRpcjWO7AQD+/KsnG7SeSpxnHEKpX58/PmtvCzqOCv3vDjqTHT9KzM32eJLFT5g2Pla1U1JXwMYPazppaRp2kjvQOpmfgPSnk7VRzpLiTwwAn125rzzYJJIJtYzBmR1mR8uagq/J1EGVMMD8QDP+1KIpNG1mshhFjoVdQU6lkrPQMB41kZj2kd1B3TtP/jJt5bWpnJ5vFQ6dEjfUW2n8N56/ua0syqNAJg9djfbxNQu0vRhYeojvIt5mCRvee4fpR8N5INjsAJnfef8Ak+tNDspoOhxfqNvIigDsTFBY91iR4i/BtagxaKO5IgAQNoAGkG5KQB+lKozASCbbWIB66YmYrUxOzXEbXFwCIHWCY6T6c2oR7OcKQQsWglxPhM2EdaEpiyuG2BafDnxO4M34q740iAGJtI942sNQIkAmaumQcEXwww2kg22Puyf2arj5VlZrpqjhiLH/ACp62PFGiUxbFKalPuTOpREebRcfu1FLqo7rMAZBvaw4JEi08UV8v7oZ1BnYFiBH4juKkIuuScP+kkyOfdj/AJoKBO6aZ0gj4X3FRiKbMimTNp4tv18qAAHIGrzA2AA+A86fREUaTf1jboR+tG6ApmsNyQSBoAFwYv4yaAECuDMm8947fG956cVfP9qBRAUAbfKkFzDuRCSDv3ees0Vsg5h9onUVTQBsBG/P7tUjHIjWxJniwIE9BM33rOwuz3ViYgQfXpbePrRHy77i+/dtJ2Fuvl5b1tRQdjn2sfdFuJ+nSh4+Yd7TaNtvmRc/WgZdCWva0kEGfLw4p5MQATF9r9Z/2FqzL+PAE3RlJFp4E3mAf35GhZvOE90wbR+5tW67IQAw/ew+MVkZ58MyoGkg2IjfYzNzUUr7EYl2fjkOSBfkkRFrelb2HiAnvOWAiR5RJF5jbrWK74YAksSDYGCIm+w+lVXGBUkDptFzxvvvVbshs5rgqQQQBHOxn8+ldWXhY4QmIkxIM7G0811S0WxoupO8zww28iLg0XBchu6l5gAEgyLXOxtS2APe/wApoy++K1HkiNjs7BVHgi0Ak7yTsBaIHUDpT2McRNcQdQ1H+WFJAHT3ZpLK7t/lX/2pzM/4a/6h6ahaulmzWy2IAiGbWU+BLSLbXWDPh6UXNYxQgD3CIg8EfPbjmKw+zcQ+1USY1rafOt5/ePmfzrmzqhPOZMZhdaqA4BgyLCSQsEXM9NieQK8rj4YBEAgHeBfxBEX3r1GA5GA0EjusfXQt682my+cek7VO5zlyUTSe8Ei8Lx/2zYW3+VS+G5kMgAuRF585NjRct77eAt86jF29D/5Gp3MhMoHUQNIPAIAHG8bmmFL37+mTYeHRupNefRzrNzsPyar4e3r+pqMJm4rBzo9oFbbUBbboSAdx0qcPDYAktqtvYT8L1kZFjq34H/tW8/uf01ls0hM4mrYxG4jf9/ShO7gwJMcW8T4VLc/6PypV2Nr8N+VaXBCUzOMSCRC8hSdW/Fr+lMnPkSNREH7zGYMG/wAay8wb+v0pjDurTffe/Jqs0az4zlZDE9efIf71RC9uT1kxI+QquVPcHm1Cy7HvX+8Kwysu2TZTqmAD03O360p9j75ZjMz8f15+VO4THSb8/WqR+lLszRGJkddxpsoCmBbmTbcem9LN2TIhsRm5sNj+5p1d/wB9avh7+oqpgzm7NZVIR/M7Em9IM4QC9go22mJN/Wt/tDnyrynaPv8AxrS3MsK2Ju438/lB3quHm3FwYkm0+X1PwpRdx5fSr5L3182/9a6YqhY2/aLR3iZn4DpQW7QNoMSLmY8/LyE0LOe9/V+bUqNl8x+dEDcTEAAJFzsOTaTzb505hYSmAR3iDJPnAt0rGyx7y+R/IVp9l/4nw/8AeozLDP3gC3dC6Vje7G9/WsrtBZW4C3iRa4kXHoevPStbO+7/AK6zs77r+QPr3b/M/GsxQMHW7wCebk+VXGC4EWIB8SNpm1S/FMZbZfM1pgXwc0ZC7iQIk7Txe1dUdmD+88jb+qopSB//2Q=='} style={{ width: '58rem' ,height:'30rem'}} />

                <Card.Body>
                    <Card.Title><h2>Tbarka</h2></Card.Title>
                    <Card.Title>Tabarka is a coastal city in the North-West of Tunisia located at a hundred kilometers from Tunis and a few kilometers from the Algerian-Tunisian border.</Card.Title>

                    <Card.Subtitle className="mb-2 text-muted"> Nord-Ouest de la Tunisie située à une centaine de kilomètres de Tunis et à quelques kilomètres de la frontière algéro-tunisienne.</Card.Subtitle>
                </Card.Body>
            </Card>
            <Card style={{ width: '60rem',height:'44rem'  }}  >
            <Card.Img variant="top" style={{ width: '58rem' ,height:'30rem'}} src={'data:image/jpeg;base64,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'} style={{ width: '58rem' ,height:'30rem'}}/>

                <Card.Body>
                    <Card.Title><h2>Tatawin</h2></Card.Title>
                    <Card.Title>Tataouine, formerly called Foum Tataouine, is a city in southeastern Tunisia located 531 kilometers from Tunis. Capital of the governorate of the same name, it is a municipality with 66 924 inhabitants in 2014</Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">  city in southeastern Tunisia located 531 kilometers from Tunis</Card.Subtitle>
                </Card.Body>
            </Card>
            </div>
            
            </>  :<div className='placelist'>
         <div className='rating'>   <BeautyStars
        value={rating}
        onChange={HandleChange}
      /></div>
            {places.filter(place =>
         
          place.rating >= rating).map(place=> 
            <Place place={place} key={place._id} />
) }
</div>}
            
    </>
    )
}

export default PlaceList
