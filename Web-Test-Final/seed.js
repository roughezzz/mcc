var mongoose = require("mongoose");
var Table = require("./models/table");

var data = [
    {
        reference_number: "1971735029793066",
        name: "Mark Levy",
        rank: "Founder",
        description: "Mark Levy is the founder of Levy Innovation, a marketing strategy firm. David Meerman Scott has called him “a positioning guru extraordinaire,” and Debbie Weil referred to him as “a horse whisperer for writers and business thinkers.” He has written for The New York Times, and has written or co-created five books. His latest is a revised, expanded, and re-subtitled edition of his bestseller, Accidental Genius: Using Writing to Generate Your Best Ideas, Insight, and Content. Mark also creates magic tricks and shows. His work has been performed Off-Broadway, in Las Vegas, and on all the major television networks. Visit him and read his blog at levyinnovation.com.",
        image: "https://3wcmm13zx3fn2h5mb93jvvkr-wpengine.netdna-ssl.com/fuel/wp-content/uploads/sites/8/2017/07/Mark-Levy-207x300.jpg?ver=1543923885",
        email: "mark@gmail.com",
        date: "2018-12-27"
        
    },
    {
        reference_number: "266021890760301",
        name: "Ann Hardley",
        rank: "Sales and Marketing Manager",
        description: "Ann Handley is a veteran of creating and managing digital content to build relationships for organizations and individuals. Ann is the author of the Wall Street Journal bestseller  Everybody Writes: Your Go-To Guide to Creating Ridiculously Good Content (September 2014, Wiley) and co-author of the best-selling book on content marketing, Content Rules: How to Create Killer Blogs, Podcasts, Videos, Ebooks, Webinars (and More) That Engage Customers and Ignite Your Business (2011, Wiley). She is the Chief Content Officer of MarketingProfs; a LinkedIn Influencer; a keynote speaker, mom, and writer.",
        image: "https://3wcmm13zx3fn2h5mb93jvvkr-wpengine.netdna-ssl.com/fuel/wp-content/uploads/sites/8/2017/07/Ann-Hardley-300x218.jpeg?ver=1543923885",
        email: "ann@gmail.com",
        date: "2018-12-29"
        
    },
    {
        reference_number: "2.26923E+15",
        name: "Lena Alexson",
        rank: "Senior Technical Trainer",
        description: "When human beings experience trauma or severe life stressors, it is not uncommon for their lives to unravel. My great passion is bringing healing to people who have been through a traumatic/stressful experience. I help my clients, who include children, adults and families, to find healthy perceptions of themselves and strengthen their relationships so they can know themselves as peaceful, complete, whole and safe.I know that no single approach is the right one for every individual, and so I have been trained in a range of modalities including Relational Gestalt Therapy, Gestalt Play Therapy, Somatic Experiencing and NARM somatic approaches to the treatment of trauma. My educational background includes a MA in Counseling Psychology and a Doctor in Clinical Psychology from Ryokan College in Los Angeles. I have a B.A. in Psychology from the University of Stockholm, Sweden a graduate certificate in Gestalt Psychotherapy from the University of Derby in the U.K.",
        image: "https://3wcmm13zx3fn2h5mb93jvvkr-wpengine.netdna-ssl.com/fuel/wp-content/uploads/sites/8/2017/07/Laura-Zigman-300x200.jpeg?ver=1543923885",
        email: "lena@gmail.com",
        date: "2018-12-31"
        
    },
    {
        reference_number: "2.24044E+15",
        name: "Laura Zigman",
        rank: "Sr Software Engineer",
        description: "Laura Zigman grew up in Newton, Massachusetts (where she felt she never quite fit in), and graduated from the University of Massachusetts at Amherst (where she didn’t fit in either) and the Radcliffe Publishing Procedures Course (where she finally started to feel like she fit in). She spent ten years working (slaving away) in New York in book publishing where she was a (much-abused under-appreciated) publicist for Times Books, Vintage Books, Turtle Bay Books, Atlantic Monthly Press, and Alfred A. Knopf.",
        image: "https://3wcmm13zx3fn2h5mb93jvvkr-wpengine.netdna-ssl.com/fuel/wp-content/uploads/sites/8/2017/07/Laura-Zigman-300x200.jpeg?ver=1543923885",
        email: "laura@gmail.com",
        date: "2019-01-02"
        
    },
    {
        reference_number: "2269228403333210885",
        name: "Lena Alexson 2",
        rank: "Senior Technical Trainer",
        description: "When human beings experience trauma or severe life stressors, it is not uncommon for their lives to unravel. My great passion is bringing healing to people who have been through a traumatic/stressful experience. I help my clients, who include children, adults and families, to find healthy perceptions of themselves and strengthen their relationships so they can know themselves as peaceful, complete, whole and safe. I know that no single approach is the right one for every individual, and so I have been trained in a range of modalities including Relational Gestalt Therapy, Gestalt Play Therapy, Somatic Experiencing and NARM somatic approaches to the treatment of trauma. My educational background includes a MA in Counseling Psychology and a Doctor in Clinical Psychology from Ryokan College in Los Angeles. I have a B.A. in Psychology from the University of Stockholm, Sweden a graduate certificate in Gestalt Psychotherapy from the University of Derby in the U.K.",
        image: "https://3wcmm13zx3fn2h5mb93jvvkr-wpengine.netdna-ssl.com/fuel/wp-content/uploads/sites/8/2017/07/Laura-Zigman-300x200.jpeg?ver=1543923885",
        email: "lena@gmail.com",
        date: "2018-12-31"
        
    },{
        reference_number: "22404411662816805454",
        name: "Ann Hardley",
        rank: "Sales and Marketing Manager",
        description: "Ann Handley is a veteran of creating and managing digital content to build relationships for organizations and individuals. Ann is the author of the Wall Street Journal bestseller  Everybody Writes: Your Go-To Guide to Creating Ridiculously Good Content (September 2014, Wiley) and co-author of the best-selling book on content marketing, Content Rules: How to Create Killer Blogs, Podcasts, Videos, Ebooks, Webinars (and More) That Engage Customers and Ignite Your Business (2011, Wiley). She is the Chief Content Officer of MarketingProfs; a LinkedIn Influencer; a keynote speaker, mom, and writer.",
        image: "https://3wcmm13zx3fn2h5mb93jvvkr-wpengine.netdna-ssl.com/fuel/wp-content/uploads/sites/8/2017/07/Ann-Hardley-300x218.jpeg?ver=1543923885",
        email: "ann@gmail.com",
        date: "2018-12-29"
        
    },
    {
        reference_number: "2269228403",
        name: "Lena Alexson",
        rank: "Senior Technical Trainer",
        description: "When human beings experience trauma or severe life stressors, it is not uncommon for their lives to unravel. My great passion is bringing healing to people who have been through a traumatic/stressful experience. I help my clients, who include children, adults and families, to find healthy perceptions of themselves and strengthen their relationships so they can know themselves as peaceful, complete, whole and safe.I know that no single approach is the right one for every individual, and so I have been trained in a range of modalities including Relational Gestalt Therapy, Gestalt Play Therapy, Somatic Experiencing and NARM somatic approaches to the treatment of trauma. My educational background includes a MA in Counseling Psychology and a Doctor in Clinical Psychology from Ryokan College in Los Angeles. I have a B.A. in Psychology from the University of Stockholm, Sweden a graduate certificate in Gestalt Psychotherapy from the University of Derby in the U.K.",
        image: "https://3wcmm13zx3fn2h5mb93jvvkr-wpengine.netdna-ssl.com/fuel/wp-content/uploads/sites/8/2017/07/Laura-Zigman-300x200.jpeg?ver=1543923885",
        email: "lena@gmail.com",
        date: "2018-12-31"
        
    },
    {
        reference_number: "2240441166",
        name: "Laura Zigman",
        rank: "Sr Software Engineer",
        description: "Laura Zigman grew up in Newton, Massachusetts (where she felt she never quite fit in), and graduated from the University of Massachusetts at Amherst (where she didn’t fit in either) and the Radcliffe Publishing Procedures Course (where she finally started to feel like she fit in). She spent ten years working (slaving away) in New York in book publishing where she was a (much-abused under-appreciated) publicist for Times Books, Vintage Books, Turtle Bay Books, Atlantic Monthly Press, and Alfred A. Knopf.",
        image: "https://3wcmm13zx3fn2h5mb93jvvkr-wpengine.netdna-ssl.com/fuel/wp-content/uploads/sites/8/2017/07/Laura-Zigman-300x200.jpeg?ver=1543923885",
        email: "laura@gmail.com",
        date: "2019-01-02"
        
    },
    {
        reference_number: "22692284032354235424",
        name: "Lena Alexson 2",
        rank: "Senior Technical Trainer",
        description: "When human beings experience trauma or severe life stressors, it is not uncommon for their lives to unravel. My great passion is bringing healing to people who have been through a traumatic/stressful experience. I help my clients, who include children, adults and families, to find healthy perceptions of themselves and strengthen their relationships so they can know themselves as peaceful, complete, whole and safe. I know that no single approach is the right one for every individual, and so I have been trained in a range of modalities including Relational Gestalt Therapy, Gestalt Play Therapy, Somatic Experiencing and NARM somatic approaches to the treatment of trauma. My educational background includes a MA in Counseling Psychology and a Doctor in Clinical Psychology from Ryokan College in Los Angeles. I have a B.A. in Psychology from the University of Stockholm, Sweden a graduate certificate in Gestalt Psychotherapy from the University of Derby in the U.K.",
        image: "https://3wcmm13zx3fn2h5mb93jvvkr-wpengine.netdna-ssl.com/fuel/wp-content/uploads/sites/8/2017/07/Laura-Zigman-300x200.jpeg?ver=1543923885",
        email: "lena@gmail.com",
        date: "2018-12-31"
        
    },
    {
        reference_number: "2240441166234234234",
        name: "Lena Alexson",
        rank: "Senior Technical Trainer",
        description: "When human beings experience trauma or severe life stressors, it is not uncommon for their lives to unravel. My great passion is bringing healing to people who have been through a traumatic/stressful experience. I help my clients, who include children, adults and families, to find healthy perceptions of themselves and strengthen their relationships so they can know themselves as peaceful, complete, whole and safe.I know that no single approach is the right one for every individual, and so I have been trained in a range of modalities including Relational Gestalt Therapy, Gestalt Play Therapy, Somatic Experiencing and NARM somatic approaches to the treatment of trauma. My educational background includes a MA in Counseling Psychology and a Doctor in Clinical Psychology from Ryokan College in Los Angeles. I have a B.A. in Psychology from the University of Stockholm, Sweden a graduate certificate in Gestalt Psychotherapy from the University of Derby in the U.K.",
        image: "https://3wcmm13zx3fn2h5mb93jvvkr-wpengine.netdna-ssl.com/fuel/wp-content/uploads/sites/8/2017/07/Laura-Zigman-300x200.jpeg?ver=1543923885",
        email: "lena@gmail.com",
        date: "2018-12-31"
        
    }
]

function seedDB(){
    //Remove all campgrounds
    Table.deleteMany({},function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Table is removed");
        }
    });
    
    //add a few campgrounds
    data.forEach(function(seed){
        Table.create(seed, function(err, campground){
            if(err){
                console.log(err);
            }
            else{
                console.log("Table added");
            }
        });
    });
}

module.exports = seedDB;