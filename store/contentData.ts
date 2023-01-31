export const contentData: contentDataType = {
    BannerImage: [
        "/images/banner1.svg",
        "/images/banner2.svg",
        "/images/banner3.svg",
        "/images/banner4.svg",
        "/images/banner5.svg",
      ],
    tours: [
        {
            id: '1',   
            title: "Penida Full Day Tour",
            description: "Full 8 Hours to Monkey Forest, Elephant Cave, Spring Temple",
            longDesc: "Ubud is one of those places where a holiday of a few days can easily turn into a stay of weeks, months or even years. The size of the town’s expat community attests to this, and so do the many novels and films that have been set here, creative responses to the seductive nature of this most cultured of all Balinese towns.",
            pay: 200000,
            image: "/images/bali1.svg",
            iternary: [
                {
                    title: "Monkey Forest",
                    description: "Monkey Forest is a nature reserve and temple complex in Ubud, Bali. It houses approximately 340 monkeys",
                },
                {
                    title: "Elephant Cave",
                    description: "Goa Gajah, or Elephant Cave, is located on the island of Bali near Ubud, in Indonesia. Built in the 9th century, it served as a sanctuary.",
                },
                {
                    title: "Spring Temple",
                    description: "The Tirta Empul Holy Water Temple is located in the village of Manukaya, near the town of Tampaksiring, not far from Ubud. The temple compound consists of a petirtaan or bathing structure, famous for its holy spring water, where Balinese Hindus go to for ritual purification.",
                },
            ],
            include: ["Air Conditioner Car","Petrol", "Driver", "Mineral Water","Fruit"],
            exclude: ["Tipping", "Other Personal Expenses"]
        },
        {
            id: '2',
            title: "Bali Safari & Marine Park",
            description: "8 Hours to Bali Safari, the African Safari Adventure in Bali",
            pay: 80000,
            image: "/images/bali2.svg",
            justDesc: ["Bali Safari, the African Safari Adventure in Bali, is home to over a thousand amazing animals and your finest destination for an adventurous, fun and educational experience more than just a safari.", "Our park represents more than 120 species, including rare & endangered species like the Komodo Dragons, Orangutan, Bali Starling bird, and many more.","At this time Bali Safari Park is the front line of wildlife conservation in Indonesia. We have been actively involved in ensuring the future survival and well-being of many Indonesian animal species."],
            include: ["English/korea Speaking Driver as Guide", "Hotel Pick up and drop Off", "Car + AC & Petrol", "Include Mineral Water", "Minimum 2 Pax", "Tour Duration 8-10 Hours ( Untuk Yang Full Day )", "Selain Full Day Tour Duration 6 Hours"],
            exclude: ["Tipping", "Other Personal Expenses"],
        },
        {
            id: '3',
            title: "Swing and Ubud Tour",
            description: "If you wanna be captured at a high, then Bali Swing is the place to be at. Bali Swing houses numerous jungle swings ranging from 10m, to 78m above the ground.",
            pay: 90000,
            image: "/images/bali3.svg",
            iternary: [
                {
                    title: "Swing",
                    description: "If you wanna be captured at a high, then Bali Swing is the place to be at. Bali Swing houses numerous jungle swings ranging from 10m, to 78m above the ground.",
                },
                {
                    title: "Ubud Palace",
                    description: "The Ubud Palace, officially Puri Saren Agung, is a historical building complex situated in Ubud, Gianyar Regency of Bali, Indonesia. Gate of Ubud Palace.",
                },
                {
                    title: "Saraswati Temple",
                    description: "Saraswati temple Kingdom of Ubud is dedicated to honor the Hindu Goddess Saraswati, the goddess of learning, literature and ar",
                },
            ],
            include: ["English/korea Speaking Driver as Guide","Hotel Pick up and drop Off", "Include Mineral Water", "Minimum 2 pax", "Tour Duration 8-10 Hours ( untuk yang full day )", "Selain Full Day tour Duration 6 Hours"],
            exclude: ["Tipping", "Other Personal Expenses", "Minimum 2 pax"],
        },
        {
            id: '4',
            title: "Kintamani Fulcano Tours",
            description: "Batur Temple, Volcano, Lake Batur, Penglipuran Traditional Village",
            pay: 100000,
            image: "/images/bali4.svg",
            iternary: [
                {
                    title: "Batur Temple",
                    description: "Pura Ulun Danu Batur, a temple dedicated to the goddess of the lake -Ida Batari Dewi Ulun Danu on the edge of a huge crater.",
                },
                {
                    title: "Volcano",
                    description: "Mount Batur Bali is an active volcano and considered to be one of Hinduism’s most sacred mountains.",
                },
                {
                    title: "Lake Batur",
                    description: "Lake Batur is a volcanic crater lake in Kintamani, Bali, Bangli Regency of Bali, located about 30 km (19 mi) northeast of Ubud in Bali.",
                },
                {
                    title: "Penglipuran Traditional Village.",
                    description: "Penglipuran is a traditional village located in Bangli Regency, is about 45 km from the city of Denpasar, quite popular as a tourist attraction.",
                },
            ],
            include: ["Air Conditioner Car","Petrol", "Driver", "Mineral Water","Fruit"],
            exclude: ["Tipping", "Other Personal Expenses"],
        },
    ],
    explore: [
        {
            id: '1',
            title: "Explore Balinese Culture",
            description: "Batur Temple, Volcano, Lake Batur, Penglipuran Traditional Village",
            pay: 90000,
            image: "/images/explore1.svg"
        },
        {
            id: '2',
            title: "Kecak Dance Uluwatu Half Day",
            description: "Batur Temple, Volcano, Lake Batur, Penglipuran Traditional Village",
            pay: 100000,
            image: "/images/explore2.svg"
        },
        {
            id: '3',
            title: "Explore Balinese Culture Full Day",
            description: "Full 8 Hours to Monkey Forest, Elephant Cave, Spring Temple",
            pay: 120000,
            image: "/images/explore3.svg"
        },
        {
            id: '4',
            title: "Bali Wild Life Half Day Tour",
            description: "Full 8 Hours to Monkey Forest, Elephant Cave, Spring Temple",
            pay: 110000,
            image: "/images/explore4.svg"
        },
    ],
    blogs: [
        {
            id: 1,
            image: "/images/blog1.svg", 
            title: "Build Your Dream Properties in Bali With DP Concept",
            description: "Founded in 2017, DP+ Concept’s passion for designing a perfect city to live in lies in the unification of art, humor, functionality, irony, and the street as its core characteristics. DP+ Concept truly believes that there’s a connection between the past and the unforeseen future, embodied in its interior designs. Committed to serving the best-personalized services, DP+ Concept dedicates its expertise as a Bali-based architecture and interior consulting company to help make your dream properties come true. Founded in 2017, DP+ Concept’s passion for designing a perfect city to live in lies in the unification of art, humor, functionality, irony, and the street as its core characteristics. DP+ Concept truly believes that there’s a connection between the past and the unforeseen future, embodied in its interior designs. Apart from a beautiful and creative design, DP+ Concept aims to create a good balance through the functionality in its carefully designed properties. With over ten years of experience, they maintain their great efforts in putting clients’ visions into dozens of projects.",
            postAt: "January 1, 2023",
            author: "Adrian",
        },
        {
            id: 2,
            image: "/images/blog2.svg",
            title: "Best Restaurants in Nusa Lembongan",
            description: "If you are looking to escape from the hustle and bustle of Bali, just a short ferry ride away you will find the beautiful island of Nusa Lembongan – offering the perfect combination of white sands, crystal-clear waters and laid-back island vibes. With a variety of dining options to suit all budgets, here is our selection of some of the best restaurants to check-out during your stay: Tigerlillys Beach Shack Delightfully located on a secluded section of popular Jungut Batu Beach and just a few minutes from Tigerlilly’s main restaurant and boutique hotel, you’ll find Tigerlilly’s Beach Shack. Welcoming diners from 8am onwards for breakfast, lunch and dinner, relax underneath the inviting umbrellas and shady palm trees, take-in the golden sands and rolling waves in this vibrant family-friendly space. Serving all of your Tigerlilly’s favourite dishes – including a wide variety of vegetarian and vegan-friendly bites – this laidback spot has plenty to entertain with their fast free Wifi, children’s playground, live music and regular movie nights. And with a beach BBQ every Sunday – what better way to finish your week than enjoying a Happy Hour cocktail with friends as you watch the sun setting on another day in paradise. Tigerlillys Perfectly located on the main Lembongan road, this hidden popular spot is the ideal setting to enjoy brunch, lunch and dinner as you relax in their laidback cosy oasis. Part of their much loved boutique hotel, Tigerlilys restaurant is open to all island visitors and is one Lembongan spot where you are always guaranteed great food and a great time! With an extensive range of Asian fusion cuisine, fuel yourself up for a day in the sun with favourites such as fruity smoothie bowls, hearty egg & bacon muffins, or go large with their Big Breakfast served with all the trimmings. Tigerlilys also offers plenty of vegetarian and vegan options on their menu as well. Their trained baristas on hand to serve-up that perfect morning coffee fix, as well as a tempting selection of cold-pressed juices, soft drinks and smoothies. There is also a variety of cocktails on offer for you to enjoy as you sit back and lap-up those paradise island vibes – bliss!",
            postAt: "January 1, 2023",
            author: "Adrian",
        },
        {
            id: 3,
            image: "/images/blog3.svg",
            title: "Nusa Penida, A Tiny Paradise in the Southeast of Bali",
            description: "There are endless wonders that you can unveil in Bali. In the south, you can find numerous luxurious tropical resorts and mesmerizing beaches. To the north, you’ll be able to see the sight of black-sanded beaches and luscious forests. The west of Bali is home to the island’s national park, housing a wide variety of exotic animals. Go towards the east, and you’ll find several outstanding temples. And if you’re looking for exciting tourist attractions, the center of Bali can be a perfect spot for you. Turns out the wonders aren’t only found within the island. Not too far from Bali, there lies a hidden paradise that packs a myriad of otherworldly marvels. Say hello to Nusa Penida, a small lovely island located off the southeastern coast of Bali. Curious about all the things that this island offers? Let’s check them out below! How to Visit The only way you can reach this amazing island is by taking sea transportations. Below are the available sea transportations you can take from Bali to reach Nusa Penida. Fast boats from the piers of Sanur, Kusamba, Pesinggahan, or Padangbai. Other options include taking a traditional boat, which has a lower price point. A ferry (Roro Nusa Jaya Abadi) departing from Padangbai. Traditional boat or canoe from Kusamba pier.Cruise ships departing from Benoa Bay. Once you’ve arrived on Nusa Penida, it is recommended for you to rent a car with a trusted driver to make your cruise around the island feel more comfortable. There are many other gems you can unveil in and around Nusa Penida. Indeed, the island offers a unique experience for those who are seeking a new place to visit while staying in Bali. As you look for other spots to visit in Nusa Penida, keep yourself informed about the CHSE (Cleanliness, Health, Safety, and Environmental Sustainability) protocols, which include wearing a mask, keeping your distance, and washing your hands with soap regularly.",
            postAt: "January 1, 2023",
            author: "Adrian",
        },
        {
            id: 4,
            image: "/images/blog4.svg",
            title: "The Best Venues to Celebrate New Year’s Eve in Bali",
            description: "Where to Celebrate & Stay for New Year’s Eve and New Year’s Day in Bali in 2023 Move over Christmas! It’s time to talk about the sexier festive season celebration, New Years. As usual Bali will be pumping this New Years and the celebrations are going to be bigger and better than ever! With a variety of events taking you from New Year’s Eve through to New Year’s Day there is something for everyone. From sipping drinks around a bonfire with your toes in the sand to sophisticated degustation courses, here is a comprehensive guide to New Years Parties in Bali, and you are going to want to RSVP to them all! Enjoy this special time of year at one of Bali’s best New Year events. Whether you’re a New Year’s Eve partier, a New Year’s Day celebrator or someone who likes it all and wants a staycation over the New Year break, we have all the info you need to make your New Year plans below… COMO Uma Canggu A full program of health and wellness as well as dining and fun for the kids with an exciting lineup of arts, crafts, games and cultural experiences and more for the kids over the entire festive period. Start New Year’s Eve right with early morning resistance training at the Pilates Studio from 8-9am. From 11am-12pm you can join Surf Fit at the Lagoon Pool to learn breathing and stretching techniques led by a TropicSurf instructor. Between 5-5.30pm you are invited to take part in Meta Meditation at the Yoga Studio. Guests are invited to make a donation to a local Canggu orphanage, Sidhi Astu Tuka. Moving on to the festivities, from 5.30pm till late, New Year’s Eve Dinner will be held at COMO Beach Club. Savour a Mediterranean inspired three-course menu accompanied by live music, DJ set and countdown. Get ready to celebrate until midnight and beyond!  On New Year’s Day you can wake up to a restorative pilates class at the Pilates Studio from 8-9am. From 11.00am to 12.00pm Archery will be held at the COMO Beach Club Lawn. Yin Yoga and Meditation will be held at the Yoga Studio from 4-5pm.",
            postAt: "January 1, 2023",
            author: "Adrian",
        },
    ]
}