import img1 from '../assets/images/Home/Struggling/Stress-Anxiety1.jpg'
import img2 from '../assets/images/Home/Struggling/Stress-Anxiety2.jpg'
import img3 from '../assets/images/Home/Struggling/Relationship1.jpg'
import img4 from '../assets/images/Home/Struggling/Relationship2.jpg'
import img5 from '../assets/images/Home/Struggling/Grief-Trauma1.jpg'
import img6 from '../assets/images/Home/Struggling/Grief-Trauma2.jpg'
import img7 from '../assets/images/Home/Struggling/Addiction.webp'
import img8 from '../assets/images/Home/Struggling/addiction2.jpg'
import img9 from '../assets/images/Home/Struggling/Self-esteem.jpg'
import img10 from '../assets/images/Home/Struggling/Self-esteem2.jpg'
import img11 from '../assets/images/Home/Struggling/Bullying1.jpg'
import img12 from '../assets/images/Home/Struggling/Bullying2.jpg'
import img13 from '../assets/images/Home/Struggling/Overthinking1.jpg'
import img14 from '../assets/images/Home/Struggling/Overthinking2.jpg'

const counsellorData = {
    'stress-anxiety': {
        title1: "Overcome Stress & Anxiety",
        title2: "Find Your Inner Balance",
        description1: "Feeling anxious or under constant pressure? You're not alone. Our experienced counsellors are here to help you understand your stress triggers, develop coping strategies, and bring back the sense of calm and control in your life.",
        btn1: "Talk to a Counsellor",
        btn2: "Learn More",
        subtitle: "STRESS & ANXIETY SUPPORT",
        qtn1: "Develop resilience and emotional strength.",
        qtn2: "Find calm through guided techniques and therapy.",
        qtntitle1: "🧩 Identify Stress Patterns",
        qtntitle2: "🧘‍♂️ Restore Mental Peace",
        img1: img1,
        img2: img2,
        experience: (
            <>
                <span style={{ fontSize: '39px', fontWeight: 700 }}>12+</span><br />
                Years Helping People Thrive
            </>
        )
    },

    'relationship': {
        title1: "Strengthen Your Relationships",
        title2: "Connect with Care & Clarity",
        description1: "Struggling with conflicts or emotional distance in your relationships? Our counsellors can guide you to build trust, enhance communication, and create deeper, more meaningful bonds with those who matter most.",
        btn1: "Talk to a Counsellor",
        btn2: "Learn More",
        subtitle: "RELATIONSHIP SUPPORT",
        qtn1: "Build emotional intelligence and empathy.",
        qtn2: "Resolve misunderstandings with healthy dialogue.",
        qtntitle1: "💞 Emotional Connection",
        qtntitle2: "🗣️ Communication Tools",
        img1: img3,
        img2: img4,
        experience: (
            <>
                <span style={{ fontSize: '39px', fontWeight: 700 }}>10+</span><br />
                Years Guiding Relationships
            </>
        )
    },
    'grief-trauma': {
        title1: "Heal Through Grief",
        title2: "You're Not Alone in Loss",
        description1: "Grieving can feel heavy and confusing. Our expert counsellors provide gentle guidance to help you process emotions, honor memories, and slowly move toward healing.",
        btn1: "Start Healing",
        btn2: "Find Comfort",
        subtitle: "GRIEF SUPPORT",
        qtn1: "Work through sadness, anger, and confusion.",
        qtn2: "Find meaning after loss with support.",
        qtntitle1: "📔 Emotional Processing",
        qtntitle2: "🤝 Healing Conversations",
        img1: img5,
        img2: img6,
        experience: (
            <>
                <span style={{ fontSize: '39px', fontWeight: 700 }}>9+</span><br />
                Years Supporting Grief Recovery
            </>
        )
    },
    'addiction': {
        title1: "Break Free from Addiction",
        title2: "Reclaim Control of Your Life",
        description1: "Struggling with substance use or behavioral addiction? You're not alone. Our counsellors provide non-judgmental support to help you understand root causes, build healthier habits, and find lasting recovery.",
        btn1: "Start Recovery",
        btn2: "Know More",
        subtitle: "ADDICTION RECOVERY",
        qtn1: "Develop coping strategies without dependency.",
        qtn2: "Heal emotionally and physically with guidance.",
        qtntitle1: "🛑 Trigger Awareness",
        qtntitle2: "🌿 Healthy Alternatives",
        img1: img7,
        img2: img8,
        experience: (
            <>
                <span style={{ fontSize: '39px', fontWeight: 700 }}>13+</span><br />
                Years Supporting Recovery
            </>
        )
    },
    'self-esteem': {
        title1: "Build Unshakable Self-Worth",
        title2: "See Yourself with Confidence",
        description1: "Low self-esteem can hold you back from living fully. Our counsellors help you rediscover your strengths, challenge self-doubt, and embrace who you truly are.",
        btn1: "Start Growing",
        btn2: "Discover Tools",
        subtitle: "SELF-ESTEEM BOOST",
        qtn1: "Recognize your unique value and strengths.",
        qtn2: "Turn self-criticism into self-support.",
        qtntitle1: "🌱 Confidence Exercises",
        qtntitle2: "🧠 Positive Self-Talk",
        img1: img9,
        img2: img10,
        experience: (
            <>
                <span style={{ fontSize: '39px', fontWeight: 700 }}>8+</span><br />
                Years Empowering Self-Worth
            </>
        )
    },
    'bullying': {
        title1: "Rise Above Bullying",
        title2: "Reclaim Your Power",
        description1: "Bullying can damage your confidence and mental safety. Our trained counsellors support you in building resilience, finding your voice, and restoring your emotional strength.",
        btn1: "Speak Up Now",
        btn2: "Know Your Options",
        subtitle: "ANTI-BULLYING SUPPORT",
        qtn1: "Stand up with strength and support.",
        qtn2: "Rebuild confidence after bullying.",
        qtntitle1: "🛡️ Empowerment Coaching",
        qtntitle2: "🧩 Emotional Safety Plan",
        img1: img11,
        img2: img12,
        experience: (
            <>
                <span style={{ fontSize: '39px', fontWeight: 700 }}>6+</span><br />
                Years Supporting Safe Environments
            </>
        )
    },
    'overthinking': {
        title1: "Silence the Noise",
        title2: "Think Clearly, Live Freely",
        description1: "Overthinking can drain your energy and peace. Learn to manage racing thoughts, reduce mental clutter, and focus your mind with tools that truly work.",
        btn1: "Clear Your Mind",
        btn2: "Learn Techniques",
        subtitle: "OVERTHINKING SUPPORT",
        qtn1: "Break free from mental loops.",
        qtn2: "Stay present and decisive.",
        qtntitle1: "🌀 Thought Management",
        qtntitle2: "🔍 Clarity Coaching",
        img1: img13,
        img2: img14,
        experience: (
            <>
                <span style={{ fontSize: '39px', fontWeight: 700 }}>7+</span><br />
                Years Helping Minds Settle
            </>
        )
    }
};

export default counsellorData;
