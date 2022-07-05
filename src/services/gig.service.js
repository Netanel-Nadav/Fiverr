import { utilService } from "./util.service"
import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"


// Categories Images
import logoDesign from '../assets/img/logo-design.jpg'
import wordpress from '../assets/img/wordpress.jpg'
import voiceOver from '../assets/img/voiceover.jpg'
import seo from '../assets/img/seo.jpg'
import social from '../assets/img/social.jpg'
import illustration from '../assets/img/illustration.jpg'


// Avatars
import avatar1 from '../assets/img/avatar1.svg'
import avatar2 from '../assets/img/avatar2.svg'
import avatar3 from '../assets/img/avatar3.svg'
import avatar4 from '../assets/img/avatar4.svg'
import avatar5 from '../assets/img/avatar5.svg'
import avatar6 from '../assets/img/avatar6.svg'
// import avatar7 from '../assets/img/avatar7.svg'
// import avatar8 from '../assets/img/avatar8.svg'

const STORAGE_KEY = 'gigs'

export const gigService = {
    query,
    getCategories,
    getById,
    getStars,
    heroImg,
    remove,
    add,
    getLabels,
}



const heroImgs = [
    'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646245663/j0iit0kneaw62qmkpveg.png',
    'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646245664/kefchqxzgtnweh3t5uu8.png',
    'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646245664/vi838xgdubeaxlt3xn3q.png',
    'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646245664/w31gxdx4u3xtfl8av31n.png'
]


const gigssss = [
    {
        _id: utilService.getRandomId(),
        title: "I will design your logo",
        price: 25,
        owner: {
            _id: utilService.getRandomId(),
            fullname: "Jimmy Johnes",
            imgUrl: avatar1,
            level: "basic/premium",
            rate: 3
        },
        daysToMake: 3,
        description: "Make unique logo...",
        imgUrl: [
            'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646040606/fek7ucqgwc6p8dyunkws.png',
            'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646040606/tmkflsrasp5yroglu1dp.png',
            'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646040606/jablvmnilpx89tpptv0o.png',
            'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646040606/dla08tuwzbfmjpv3naq0.png',
        ],
        tags: [
            "logo-design",
            "artisitic",
            "proffesional",
            "accessible"
        ],
        reviews: [
            {
                _id: utilService.getRandomId(),
                byUser: 'Elazar the Helper',
                imgUrl: avatar3,
                review: 'The designer nailed the logo at first try. I was very impressed how creative the logo turned out. However, I wanted the designer to come up with a creative way to display the name of my business and it was a bit frustrating process with lots of back and forth. I wish the designer asked me what type of feeling I wanted the design to give. At the end, the designer delivered what I was looking for but as I mentioned, there was a lot of hand holding and back and forth. Despite of everything, I would work with the designer again. I am very satisfied with the end result'
            },
            {
                _id: utilService.getRandomId(),
                byUser: 'Maor the Darkness',
                imgUrl: avatar4,
                review: 'Its not often you get a near perfect result right off the bat with logos. We received what we needed from the first sketch, that itself was something we don\'t see a lot of which made us very happy. The quality of work was well represented by the examples, we got the person we wanted and got the results we expected. Would utilize Stefans services again for sure.'
            },
        ]
    },
    {
        _id: utilService.getRandomId(),
        title: "I'll make you a Perfect Video",
        price: 50,
        owner: {
            _id: utilService.getRandomId(),
            fullname: "Timmy Tompson",
            imgUrl: avatar2,
            level: "premium",
            rate: 5
        },
        daysToMake: 5,
        description: "Lets make a Remarkable video",
        imgUrl: [
            'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646040833/skdwbxjkexklui9jru4z.png',
            'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646040860/qqyg9sbmgbbfcgkuknqm.png',
            'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646040886/yskgzzboelt7h1oco5d6.jpg',
            'https://res.cloudinary.com/dvxuxsyoe/image/upload/v1646040909/ohnucjhfp9cf7imy1yzj.png',
        ],
        tags: [
            "video-editing",
            "artisitic",
            "proffesional",
            "accessible"
        ],
        reviews: [
            {
                _id: utilService.getRandomId(),
                byUser: 'Ice Nadav',
                imgUrl: avatar5,
                review: 'Waf waf, arrr How how how nati: Stop it ICE!!! ice: arrr Wafff wafff'
            },
            {
                _id: utilService.getRandomId(),
                byUser: 'Dr. Strange',
                imgUrl: avatar6,
                review: 'You know nothing Spiderman... by the way, where is the movies Lady spider is?'
            },
        ]
    }
]


const allTags = [
    {
        desc: "logo-design",
        imgUrl: logoDesign
    },
    {
        desc: "wordpress",
        imgUrl: wordpress
    },
    {
        desc: "voice-over",
        imgUrl: voiceOver
    },
    {
        desc: "seo",
        imgUrl: seo
    },
    {
        desc: "social",
        imgUrl: social
    },
    {
        desc: "illustration",
        imgUrl: illustration
    },

]



function getLabels() {
    return allTags
}

async function heroImg() {
    return Promise.resolve(heroImgs)
}


async function query(filterBy = null) {
    const gigs = await httpService.get('gig/', filterBy)
    return gigs
}

async function remove(id) {
    const removedGig = await storageService.remove(STORAGE_KEY, id)
    return removedGig
}


async function add(newGig) {
    if (!newGig.imgUrl.length) {
        newGig.imgUrl.push('https://sportaccommodatiesbeverwijk.nl/wp-content/uploads/2019/07/placeholder.png')
    }
    const addedGig = await httpService.post('gig/add', newGig)
    return addedGig
}


function getCategories(pageIdx) {
    if (pageIdx === 0) return allTags.slice(0, 5)
    else return allTags.slice(1, 6)
}


async function getById(id) {
    const gig = await httpService.get(`gig/${id}`, id)
    return gig
}

function getStars(raiting) {
    const starRaiting = utilService.starGenerator(raiting)
    return starRaiting
}