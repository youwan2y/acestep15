import {
  Music,
  Zap,
  Shield,
  Download,
  TrendingUp,
  DollarSign,
  BookOpen,
  Sparkles,
  Brain,
  Target,
  Heart,
  Headphones,
  Mic,
  GraduationCap,
  Clock,
  Volume2,
  Smile,
  CheckCircle,
  XCircle,
  GitCompare,
  Radio,
  Video,
  Cpu,
  Globe,
  Unlock,
} from 'lucide-react'

// YouTube Shorts 页面配置
export const youTubeShortsConfig = {
  metadata: {
    title: 'Free Background Music for YouTube Shorts | Ace-Step 1.5',
    description:
      'Create viral YouTube Shorts with free AI background music. Trending sounds, no copyright issues. Perfect for 15-60 second videos.',
    keywords: [
      'youtube shorts background music free',
      'shorts music generator',
      'free music for youtube shorts',
      'trending shorts background music',
      'shorts sound effects',
      'youtube shorts music no copyright',
    ],
  },
  hero: {
    badge: 'YouTube Shorts Creators',
    title: 'YouTube Shorts Background Music',
    subtitle:
      'Create viral YouTube Shorts with free AI-generated background music. No copyright claims, perfect for 15-60 second videos.',
    stats: [
      { value: '2,400+', label: 'Monthly Searches' },
      { value: '↑37%', label: 'Trend Growth' },
      { value: '15-60s', label: 'Perfect Length' },
    ],
    ctaText: 'Create Shorts Music Free →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: Zap,
      title: 'Viral Trends',
      description: 'Generate music matching current Shorts trends and viral sounds',
    },
    {
      icon: Music,
      title: 'Perfect Length',
      description: 'Optimized for 15-60 second Shorts format with seamless loops',
    },
    {
      icon: Shield,
      title: 'No Copyright',
      description: 'AI-generated music means no copyright claims or strikes',
    },
    {
      icon: Download,
      title: 'Instant Download',
      description: 'Download your track immediately in high-quality MP3 format',
    },
  ],
  steps: [
    {
      title: 'Choose Your Style',
      description:
        'Select from trending Shorts music styles: upbeat, dance, funny, inspirational',
    },
    {
      title: 'AI Generates Music',
      description:
        'Our AI creates a unique 15-60 second track matching your style in seconds',
    },
    {
      title: 'Download & Upload',
      description: 'Download your music and add it to your Shorts video instantly',
    },
  ],
  examples: [
    {
      keyword: 'Upbeat Dance',
      prompt: 'Upbeat electronic dance music for YouTube Shorts, energetic and catchy, 30 seconds',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Funny Moments',
      prompt: 'Funny quirky background music with silly sound effects for comedy Shorts',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Inspirational',
      prompt: 'Inspirational motivational music building up to epic climax, perfect for transformation Shorts',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Chill Vibes',
      prompt: 'Lo-fi chill beats for aesthetic and lifestyle Shorts, relaxing and smooth',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Action & Energy',
      prompt: 'High-energy action music with driving beats for sports and fitness Shorts',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Emotional',
      prompt: 'Emotional piano melody with subtle strings for touching moment Shorts',
      difficulty: 'advanced' as const,
    },
  ],
  faq: [
    {
      question: 'Can I use this music for YouTube Shorts monetization?',
      answer:
        'Yes! AI-generated music is royalty-free. Free tier users can use music in Shorts with attribution. Pro users get full commercial license for monetized content.',
    },
    {
      question: 'What length should Shorts music be?',
      answer:
        'YouTube Shorts are 15-60 seconds. Our AI generates music optimized for these lengths with seamless loops for longer videos.',
    },
    {
      question: 'Will I get copyright claims on Shorts?',
      answer:
        'No. AI-generated music is unique to you. Unlike library music, you won\'t face copyright claims, Content ID matches, or revenue sharing.',
    },
    {
      question: 'What music styles work best for viral Shorts?',
      answer:
        'Trending styles include upbeat dance, lo-fi chill, funny quirky sounds, and inspirational builds. Our AI stays updated with current viral trends.',
    },
  ],
}

// YouTube Background Music 页面配置
export const youTubeBackgroundMusicConfig = {
  metadata: {
    title: 'Free YouTube Background Music No Copyright | Ace-Step 1.5',
    description:
      'Download free AI-generated background music for YouTube videos. No copyright claims, royalty-free, monetization-safe. Create custom tracks in seconds.',
    keywords: [
      'youtube background music free no copyright',
      'free music for youtube videos no copyright',
      'free ai music for youtube no claim',
      'royalty-free youtube music',
      'no copyright background music',
      'youtube safe music',
    ],
  },
  hero: {
    badge: 'YouTube Creators',
    title: 'YouTube Background Music',
    subtitle:
      'Free AI-generated background music for YouTube videos. No copyright claims, 100% monetization-safe. Create unlimited custom tracks.',
    stats: [
      { value: '4,840+', label: 'Monthly Searches' },
      { value: '0', label: 'Copyright Claims' },
      { value: '100%', label: 'Revenue Yours' },
    ],
    ctaText: 'Create Background Music Free →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: Shield,
      title: 'No Copyright Claims',
      description: 'AI-generated music means no Content ID matches or copyright strikes',
    },
    {
      icon: DollarSign,
      title: '100% Revenue',
      description: 'Keep all your YouTube ad revenue - no revenue sharing required',
    },
    {
      icon: Music,
      title: 'Any Genre',
      description: 'Electronic, lo-fi, ambient, cinematic, rock, classical, and more',
    },
    {
      icon: TrendingUp,
      title: 'Monetization-Safe',
      description: 'Safe for YouTube Partner Program and monetized channels',
    },
  ],
  steps: [
    {
      title: 'Describe Your Music',
      description:
        'Type what you need: "calm ambient background music for tutorial videos"',
    },
    {
      title: 'AI Generates in Seconds',
      description:
        'Our AI creates a unique track based on your description in under 30 seconds',
    },
    {
      title: 'Download & Use',
      description:
        'Download your track without watermarks and use it in your YouTube videos',
    },
  ],
  examples: [
    {
      keyword: 'Tutorial Videos',
      prompt: 'Calm ambient background music for YouTube tutorial videos, non-distracting, steady rhythm',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Vlogs & Lifestyle',
      prompt: 'Upbeat happy background music for lifestyle vlogs, cheerful and positive vibes',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Tech Reviews',
      prompt: 'Modern electronic background music for tech review videos, futuristic and clean',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Gaming Content',
      prompt: 'Energetic gaming background music with electronic beats, exciting and dynamic',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Educational',
      prompt: 'Soft piano background music for educational videos, inspiring and motivational',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Productivity',
      prompt: 'Lo-fi chill beats for productivity and study videos, relaxing and focused',
      difficulty: 'easy' as const,
    },
  ],
  faq: [
    {
      question: 'Is this music really safe for YouTube monetization?',
      answer:
        'Yes! AI-generated music is unique and royalty-free. Unlike library music, there\'s no Content ID matching. You keep 100% of your ad revenue.',
    },
    {
      question: 'What\'s the difference between free and Pro for YouTube?',
      answer:
        'Free tier requires attribution in video description. Pro tier ($9/month) includes full commercial license, no attribution required, and WAV/STEM formats.',
    },
    {
      question: 'Can I use the same track in multiple videos?',
      answer:
        'Yes! Once generated, you can use your track in unlimited YouTube videos. Each generation is unique to you.',
    },
    {
      question: 'Will my videos get flagged by Content ID?',
      answer:
        'No. AI-generated music doesn\'t exist in Content ID databases. Your videos won\'t get flagged, claimed, or demonetized due to music.',
    },
  ],
}

// Beginners Guide 页面配置
export const beginnersGuideConfig = {
  metadata: {
    title: 'AI Music Generator for Complete Beginners | Ace-Step 1.5',
    description:
      'Start creating music with AI - no experience needed. Complete beginner\'s guide to AI music generation. Make your first track in 5 minutes.',
    keywords: [
      'ai music generator for complete beginners',
      'make music without knowing theory',
      'beginner music maker',
      'ai music tutorial',
      'how to use ai music generator',
      'music creation for beginners',
    ],
  },
  hero: {
    badge: 'Complete Beginners',
    title: 'AI Music Generator for Beginners',
    subtitle:
      'Create professional music without any music theory knowledge. Our AI handles everything - just describe what you want.',
    stats: [
      { value: 'KD 8', label: 'Lowest Difficulty' },
      { value: '5 min', label: 'First Track' },
      { value: '920+', label: 'Monthly Searches' },
    ],
    ctaText: 'Start Your First Track →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: BookOpen,
      title: 'No Theory Required',
      description: 'Skip years of music theory - AI handles harmony, melody, and rhythm for you',
    },
    {
      icon: Sparkles,
      title: 'Beginner-Friendly',
      description: 'Simple text prompts like "happy upbeat pop song" are all you need',
    },
    {
      icon: Zap,
      title: '5-Minute Start',
      description: 'From zero to your first music track in just 5 minutes',
    },
    {
      icon: Download,
      title: 'Instant Results',
      description: 'Download your track immediately and use it anywhere',
    },
  ],
  steps: [
    {
      title: 'Describe Your Idea',
      description:
        'Type a simple description: "relaxing piano music" or "energetic electronic beat"',
    },
    {
      title: 'AI Creates Music',
      description:
        'Our AI generates a complete track with melody, harmony, and rhythm in seconds',
    },
    {
      title: 'Download & Learn',
      description:
        'Download your track and experiment with different styles to learn',
    },
  ],
  examples: [
    {
      keyword: 'Simple Piano',
      prompt: 'Relaxing piano music, slow tempo, peaceful and calm',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Upbeat Pop',
      prompt: 'Happy upbeat pop song with catchy melody, major key',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Electronic Beat',
      prompt: 'Energetic electronic dance beat, fast tempo, synth sounds',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Chill Lo-fi',
      prompt: 'Chill lo-fi hip hop beat, relaxed, study music vibes',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Cinematic',
      prompt: 'Epic cinematic orchestral music, dramatic strings, building intensity',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Acoustic Guitar',
      prompt: 'Warm acoustic guitar strumming, folk style, gentle and organic',
      difficulty: 'easy' as const,
    },
  ],
  faq: [
    {
      question: 'Do I need to know music theory?',
      answer:
        'No! AI music generation requires zero music theory knowledge. Just describe the mood, style, or feeling you want, and AI handles all the technical aspects.',
    },
    {
      question: 'What if I\'ve never made music before?',
      answer:
        'Perfect! This is designed for complete beginners. Start with simple descriptions like "happy music" or "sad piano" and experiment from there.',
    },
    {
      question: 'How long does it take to learn?',
      answer:
        'Minutes, not years. You can create your first track in under 5 minutes. The more you experiment, the better you\'ll get at describing your ideas.',
    },
    {
      question: 'Can I make any genre?',
      answer:
        'Yes! Electronic, pop, rock, classical, hip-hop, ambient, jazz, folk - any genre you can describe, AI can create.',
    },
  ],
}

// Beginners No Experience 页面配置
export const beginnersNoExperienceConfig = {
  metadata: {
    title: 'How to Create Music with No Experience | Ace-Step 1.5',
    description:
      'Create professional music without any experience. AI-powered music generation for absolute beginners. From idea to track in 30 seconds.',
    keywords: [
      'how to create music with no experience',
      'music creation for beginners',
      'no experience music maker',
      'easy music creation',
      'make music without skills',
      'music generator no experience',
    ],
  },
  hero: {
    badge: 'Zero Experience Needed',
    title: 'Create Music with No Experience',
    subtitle:
      'Turn your ideas into professional music tracks without any prior experience. AI does the heavy lifting - you just describe what you want.',
    stats: [
      { value: '1,400+', label: 'Monthly Searches' },
      { value: '30 sec', label: 'Generation Time' },
      { value: '37%', label: 'Higher Conversion' },
    ],
    ctaText: 'Create Music Now →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: Sparkles,
      title: 'Zero Learning Curve',
      description: 'No instruments, no software, no experience - just your ideas',
    },
    {
      icon: Zap,
      title: '30-Second Generation',
      description: 'From text description to complete music track in half a minute',
    },
    {
      icon: Download,
      title: 'Professional Quality',
      description: 'Studio-quality output that sounds like it was made by pros',
    },
    {
      icon: Shield,
      title: 'Royalty-Free',
      description: 'Use your music anywhere - YouTube, podcasts, games, and more',
    },
  ],
  steps: [
    {
      title: 'Imagine Your Music',
      description:
        'Think of a mood, style, or feeling: "epic movie soundtrack" or "chill beach vibes"',
    },
    {
      title: 'Type Your Description',
      description:
        'Write a simple text prompt describing your music idea in plain English',
    },
    {
      title: 'Get Your Track',
      description:
        'AI generates your music in 30 seconds - download and use it immediately',
    },
  ],
  examples: [
    {
      keyword: 'Mood-Based',
      prompt: 'Happy feel-good music that makes people smile',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Scene-Based',
      prompt: 'Background music for a cozy coffee shop scene',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Emotion-Based',
      prompt: 'Melancholic piano piece for a sad emotional moment',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Activity-Based',
      prompt: 'Energetic workout music for fitness and exercise',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Style-Based',
      prompt: 'Jazz music with saxophone and piano, smooth and sophisticated',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Story-Based',
      prompt: 'Adventure music for exploring a magical forest',
      difficulty: 'medium' as const,
    },
  ],
  faq: [
    {
      question: 'Can someone with zero musical ability really create music?',
      answer:
        'Absolutely! AI music generation requires no musical ability whatsoever. If you can describe what you want to hear, you can create it.',
    },
    {
      question: 'What if I don\'t know music terminology?',
      answer:
        'No problem! Use everyday language: "happy", "sad", "energetic", "calm". AI understands natural descriptions, not technical terms.',
    },
    {
      question: 'Will the music sound amateur?',
      answer:
        'Not at all! AI generates professional-quality tracks with proper mixing, mastering, and production. Your music will sound like it was made by experienced producers.',
    },
    {
      question: 'Can I try different styles to learn?',
      answer:
        'Yes! Experiment freely. Try different genres, moods, and styles. Each generation teaches you how to write better prompts.',
    },
  ],
}

// Meditation Music 页面配置
export const meditationMusicConfig = {
  metadata: {
    title: 'Free Background Music for Meditation | Ace-Step 1.5',
    description:
      'Generate custom meditation music with AI. Relaxing ambient sounds, binaural beats, nature music. Perfect for meditation apps, yoga, wellness videos.',
    keywords: [
      'free background music for meditation',
      'meditation music generator',
      'relaxation music ai',
      'yoga background music',
      'mindfulness music',
      'ambient meditation music',
    ],
  },
  hero: {
    badge: 'Wellness & Meditation',
    title: 'Meditation Music Generator',
    subtitle:
      'Create custom meditation and relaxation music with AI. Ambient soundscapes, binaural beats, nature-inspired tracks for wellness apps and videos.',
    stats: [
      { value: '1,900+', label: 'Monthly Searches' },
      { value: '432Hz', label: 'Healing Frequency' },
      { value: '∞', label: 'Customizable' },
    ],
    ctaText: 'Create Meditation Music →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: Sparkles,
      title: 'Custom Frequencies',
      description: 'Generate music at specific frequencies: 432Hz, 528Hz, binaural beats',
    },
    {
      icon: Music,
      title: 'Ambient Soundscapes',
      description: 'Create deep, immersive soundscapes perfect for meditation sessions',
    },
    {
      icon: Zap,
      title: 'Any Duration',
      description: 'Generate tracks of any length - 5 minutes to 1 hour meditation sessions',
    },
    {
      icon: Download,
      title: 'Royalty-Free',
      description: 'Use in meditation apps, yoga classes, wellness videos without licensing fees',
    },
  ],
  steps: [
    {
      title: 'Choose Your Style',
      description:
        'Select meditation style: deep ambient, nature sounds, binaural beats, or guided meditation background',
    },
    {
      title: 'Set Parameters',
      description:
        'Optionally specify frequency (432Hz, 528Hz), duration, and instruments (singing bowls, chimes)',
    },
    {
      title: 'Generate & Download',
      description:
        'AI creates your meditation track with seamless loops for extended sessions',
    },
  ],
  examples: [
    {
      keyword: 'Deep Ambient',
      prompt: 'Deep ambient meditation music with soft pads and drones, 432Hz tuning, very slow and peaceful',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Nature Fusion',
      prompt: 'Meditation music with gentle piano and nature sounds, forest ambience, birds chirping softly',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Binaural Beats',
      prompt: 'Theta wave binaural beats meditation, 6Hz frequency, deep relaxation, minimal ambient background',
      difficulty: 'advanced' as const,
    },
    {
      keyword: 'Singing Bowls',
      prompt: 'Tibetan singing bowl meditation music, harmonic overtones, healing vibrations, slow rhythms',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Yoga Flow',
      prompt: 'Gentle yoga background music, soft ambient textures, steady rhythm, perfect for vinyasa flow',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Sleep Music',
      prompt: 'Deep sleep meditation music, very slow ambient, delta waves, no sudden changes, continuous drift',
      difficulty: 'medium' as const,
    },
  ],
  faq: [
    {
      question: 'Can I generate music at specific frequencies like 432Hz?',
      answer:
        'Yes! You can specify frequencies like 432Hz (healing), 528Hz (love frequency), or binaural beat frequencies (alpha, theta, delta waves).',
    },
    {
      question: 'Is this music good for meditation apps?',
      answer:
        'Perfect for meditation apps! AI generates unique tracks, so you won\'t have the same music as other apps. Plus, royalty-free licensing means no ongoing fees.',
    },
    {
      question: 'How long can meditation tracks be?',
      answer:
        'Any length you need. Generate 5-minute tracks with seamless loops, or create longer 30-60 minute sessions for deep meditation.',
    },
    {
      question: 'What meditation styles work best?',
      answer:
        'All styles work: deep ambient, nature soundscapes, binaural beats, guided meditation backgrounds, yoga music, sleep music, and more.',
    },
  ],
}

// Study Focus Music 页面配置
export const studyFocusMusicConfig = {
  metadata: {
    title: 'Study Music Generator No Vocals | Ace-Step 1.5',
    description:
      'Create focus-enhancing study music with AI. Instrumental lo-fi, ambient, classical music. Boost productivity and concentration. Perfect for students.',
    keywords: [
      'study music generator no vocals',
      'free music for podcast intro',
      'focus music ai',
      'concentration music',
      'lo-fi study beats',
      'instrumental study music',
    ],
  },
  hero: {
    badge: 'Students & Focus',
    title: 'Study Music Generator',
    subtitle:
      'Generate focus-enhancing instrumental music for studying, working, and concentration. Lo-fi beats, ambient textures, and calm background music.',
    stats: [
      { value: '2,420+', label: 'Monthly Searches' },
      { value: '0', label: 'Vocals/Distractions' },
      { value: '↑40%', label: 'Focus Boost' },
    ],
    ctaText: 'Create Study Music →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: Zap,
      title: 'No Vocals',
      description: 'Pure instrumental music - no distracting lyrics or voices',
    },
    {
      icon: TrendingUp,
      title: 'Focus-Enhancing',
      description: 'Optimized tempos and frequencies for concentration and productivity',
    },
    {
      icon: Music,
      title: 'Multiple Styles',
      description: 'Lo-fi hip-hop, ambient, classical, electronic - choose your focus style',
    },
    {
      icon: Download,
      title: 'Podcast-Ready',
      description: 'Perfect for podcast intros, study playlists, and background content',
    },
  ],
  steps: [
    {
      title: 'Choose Study Style',
      description:
        'Select focus music style: lo-fi beats, ambient, classical, or electronic',
    },
    {
      title: 'Set Parameters',
      description:
        'Specify tempo (60-80 BPM optimal for focus), duration, and mood',
    },
    {
      title: 'Generate & Focus',
      description:
        'Download your study track and boost your concentration and productivity',
    },
  ],
  examples: [
    {
      keyword: 'Lo-fi Study',
      prompt: 'Lo-fi hip hop study beats, 70 BPM, chill and relaxing, no vocals, soft vinyl crackle',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Ambient Focus',
      prompt: 'Ambient electronic music for deep focus, slow evolving textures, no beats, atmospheric',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Classical Study',
      prompt: 'Soft classical piano music for studying, slow tempo, minimal dynamics, peaceful',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Podcast Intro',
      prompt: 'Upbeat podcast intro music, 15 seconds, professional and engaging, instrumental only',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Work Music',
      prompt: 'Productivity background music, steady electronic beat, motivating but not distracting, 80 BPM',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Reading Music',
      prompt: 'Soft acoustic guitar ambient music for reading, very calm, no percussion, gentle melodies',
      difficulty: 'easy' as const,
    },
  ],
  faq: [
    {
      question: 'Why no vocals in study music?',
      answer:
        'Vocals and lyrics distract your brain\'s language processing centers. Instrumental music keeps your focus on studying, not singing along.',
    },
    {
      question: 'What\'s the best tempo for focus music?',
      answer:
        '60-80 BPM (beats per minute) matches your heart rate and promotes deep focus. Our AI optimizes for these tempos automatically.',
    },
    {
      question: 'Can I use this for podcast intros?',
      answer:
        'Yes! Perfect for podcast intros, transitions, and background music. Royalty-free means you can monetize your podcast without licensing issues.',
    },
    {
      question: 'Does study music actually help concentration?',
      answer:
        'Research shows the right background music can improve focus by up to 40%. Calm, instrumental music without lyrics works best for most people.',
    },
  ],
}

// YouTube Monetization 页面配置
export const youTubeMonetizationConfig = {
  metadata: {
    title: 'No Copyright Music for YouTube Monetization | Ace-Step 1.5',
    description:
      'Monetize your YouTube channel with AI-generated music. No copyright claims, 100% revenue yours. Complete guide to copyright-safe content creation.',
    keywords: [
      'no copyright music for youtube monetization',
      'monetization-safe music',
      'youtube copyright free music',
      'commercial use music',
      'youtube partner program music',
      'safe music for ypp',
    ],
  },
  hero: {
    badge: 'YouTube Monetization',
    title: 'No Copyright Music for YouTube Monetization',
    subtitle:
      'Keep 100% of your YouTube revenue with AI-generated music. No copyright claims, no Content ID matches, no revenue sharing. Safe for YouTube Partner Program.',
    stats: [
      { value: '1,100+', label: 'Monthly Searches' },
      { value: '$1.30', label: 'High CPC' },
      { value: '100%', label: 'Your Revenue' },
    ],
    ctaText: 'Get Monetization-Safe Music →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: DollarSign,
      title: '100% Revenue',
      description: 'Keep all your YouTube ad revenue - no splits, no licensing fees',
    },
    {
      icon: Shield,
      title: 'No Content ID',
      description: 'AI-generated music doesn\'t trigger Content ID matches or claims',
    },
    {
      icon: TrendingUp,
      title: 'YPP-Safe',
      description: 'Safe for YouTube Partner Program and monetized channels',
    },
    {
      icon: Zap,
      title: 'Commercial License',
      description: 'Full commercial usage rights with Pro tier for business creators',
    },
  ],
  steps: [
    {
      title: 'Generate Your Music',
      description:
        'Create custom AI music for your YouTube videos - any genre, any style',
    },
    {
      title: 'Choose License',
      description:
        'Free tier: attribution required. Pro tier: full commercial license, no attribution',
    },
    {
      title: 'Monetize Safely',
      description:
        'Use your music in monetized YouTube videos and keep 100% of revenue',
    },
  ],
  examples: [
    {
      keyword: 'Tutorial Content',
      prompt: 'Background music for tutorial videos, calm and professional, non-distracting',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Product Reviews',
      prompt: 'Modern background music for product review videos, upbeat and engaging',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Vlog Content',
      prompt: 'Versatile vlog background music, cheerful and energetic, works for daily content',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Gaming Videos',
      prompt: 'Energetic gaming background music, electronic style, exciting and dynamic',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Educational',
      prompt: 'Inspiring background music for educational content, motivational and positive',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Tech Channel',
      prompt: 'Futuristic tech background music, modern electronic, clean and professional',
      difficulty: 'medium' as const,
    },
  ],
  faq: [
    {
      question: 'Will AI music affect my YouTube monetization?',
      answer:
        'No! AI-generated music is royalty-free and doesn\'t trigger Content ID. Your videos remain fully monetizable with 100% revenue to you.',
    },
    {
      question: 'What license do I need for monetized channels?',
      answer:
        'Free tier requires attribution in description. Pro tier ($9/month) includes full commercial license with no attribution required.',
    },
    {
      question: 'Can I use this for YouTube Partner Program application?',
      answer:
        'Yes! AI-generated music is safe for YPP applications. No copyright issues that could prevent monetization approval.',
    },
    {
      question: 'What if I get a false copyright claim?',
      answer:
        'Rare, but if it happens, dispute it. AI music is unique to you. We provide documentation proving your ownership and rights.',
    },
  ],
}

// Calming Classroom Music 页面配置
export const calmingClassroomMusicConfig = {
  metadata: {
    title: 'Calming Classroom Music Generator for Teachers | Ace-Step 1.5',
    description:
      'Generate free calming classroom music with AI. Calm music for classroom independent work, transitions, tests, and brain breaks. No copyright, instant download.',
    keywords: [
      'calming classroom music',
      'calming music for classroom',
      'calm classroom music',
      'calm music for classroom',
      'classroom music generator',
      'background music for teachers',
    ],
  },
  hero: {
    badge: 'Teachers & Educators',
    title: 'Calming Classroom Music Generator',
    subtitle:
      'Create custom calming music for your classroom in seconds. AI-generated instrumental tracks for independent work, transitions, tests, and brain breaks — royalty-free.',
    stats: [
      { value: '28K+', label: 'Monthly Searches' },
      { value: 'KD 41', label: 'Beatable Difficulty' },
      { value: '100%', label: 'Royalty-Free' },
    ],
    ctaText: 'Generate Classroom Music Free →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: GraduationCap,
      title: 'Made for Teachers',
      description:
        'Purpose-built for K–12 classrooms: no lyrics, calm tempos, and focus-enhancing frequencies',
    },
    {
      icon: Clock,
      title: 'Instant Generation',
      description:
        'Get your calming classroom track in under 30 seconds — ready before the bell rings',
    },
    {
      icon: Volume2,
      title: 'No Distractions',
      description:
        'Purely instrumental music — no vocals or lyrics that pull students away from tasks',
    },
    {
      icon: Smile,
      title: 'Reduces Anxiety',
      description:
        'Research-backed: calming music lowers heart rate, reduces outbursts, and improves focus',
    },
  ],
  whenToUse: [
    {
      moment: 'Morning Entry',
      description:
        'Set a calm tone as students arrive. Soft nature sounds or gentle piano signal it\'s time to settle in and begin the day.',
      icon: '🌅',
      musicType: 'Soft piano, gentle acoustic guitar',
    },
    {
      moment: 'Independent Work',
      description:
        'Classical or lo-fi instrumental music keeps students focused during reading, writing, or math. Avoid anything with lyrics.',
      icon: '📖',
      musicType: 'Classical (Mozart, Beethoven), lo-fi beats',
    },
    {
      moment: 'Transitions',
      description:
        'Replace countdowns with a calming "transition track." Students learn to move when the music changes — without verbal reminders.',
      icon: '🔄',
      musicType: 'Steady ambient, soft instrumental',
    },
    {
      moment: 'Test Time',
      description:
        'Quiet background music reduces test anxiety. Keep volume low and avoid sudden changes in tempo or dynamics.',
      icon: '📝',
      musicType: 'Very soft classical, minimal ambient',
    },
    {
      moment: 'Brain Breaks',
      description:
        'After high-energy activities or recess, calming music helps students regulate and refocus quickly.',
      icon: '🧠',
      musicType: 'Nature sounds, gentle acoustic',
    },
  ],
  steps: [
    {
      title: 'Describe Your Classroom Moment',
      description:
        'Type what you need: "calm background music for independent reading" or "soft piano for morning entry"',
    },
    {
      title: 'AI Generates in Seconds',
      description:
        'Ace-Step creates a unique instrumental track optimized for focus and calm — no lyrics, right tempo',
    },
    {
      title: 'Play or Download',
      description:
        'Instantly play your track in the classroom or download it for offline use — royalty-free',
    },
  ],
  examples: [
    {
      keyword: 'Morning Entry',
      prompt: 'Soft gentle piano for classroom morning entry, welcoming and calm, slow tempo, no percussion',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Independent Reading',
      prompt: 'Calm classical background music for reading, Mozart-style, soft strings, no vocals, 60 BPM',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Test / Assessment',
      prompt: 'Very quiet ambient music for test-taking, minimal, barely audible, no drums, stress-reducing',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Transitions',
      prompt: 'Gentle acoustic guitar transition music for classroom, 2 minutes, steady and predictable tempo',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Brain Break',
      prompt: 'Calming nature-inspired music after recess, soft flute with birds, grounding and peaceful',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Group Work',
      prompt: 'Lo-fi chill background music for group work, soft beats, focused but light energy, instrumental',
      difficulty: 'easy' as const,
    },
  ],
  faq: [
    {
      question: 'What is calming classroom music and why do teachers use it?',
      answer:
        'Calming classroom music is instrumental background music played during lessons to reduce student anxiety, improve focus, and ease transitions. Research from Harvard Health shows it can lower heart rate and reduce classroom outbursts. Teachers use it during independent work, morning entry, tests, and brain breaks.',
    },
    {
      question: 'What type of calm music for classroom works best?',
      answer:
        'The best calm music for classroom use is always instrumental — no lyrics, as vocals distract language processing. Top choices include classical (Mozart, Beethoven), lo-fi beats, acoustic guitar, and nature sounds. Keep tempo between 60–80 BPM to match a relaxed heart rate.',
    },
    {
      question: 'How is this different from searching YouTube for calming classroom music?',
      answer:
        'YouTube videos are fixed. With Ace-Step, you generate custom calming music for classroom moments — specific tempo, instruments, and duration. No ads, no copyright claims, and you can create unique tracks for morning entry vs. test time vs. brain breaks.',
    },
    {
      question: 'Can I use this calming music for classroom activities without copyright issues?',
      answer:
        'Yes! AI-generated music is royalty-free. Unlike YouTube videos or Spotify playlists, you own the track you generate. Use it freely in your classroom, school events, or even educational YouTube videos.',
    },
    {
      question: 'Does calm classroom music really improve student behavior?',
      answer:
        'Yes — multiple studies support it. Calming music can regulate breathing and lower heart rate, leading to fewer outbursts and better attention spans. Many teachers report students settle in faster when the same calming track plays daily, because it becomes a routine signal.',
    },
    {
      question: 'How do I use calming music for classroom transitions?',
      answer:
        'Play a consistent "transition song" whenever students need to change activities. Over 1–2 weeks, students associate the music with the transition and start moving without verbal reminders. Generate a 2–3 minute gentle instrumental track and use it consistently every day.',
    },
    {
      question: 'Is this suitable for all grade levels?',
      answer:
        'Absolutely. Calming classroom music works from kindergarten to high school. Younger students respond well to nature sounds and simple melodies; older students often prefer lo-fi beats or soft classical. Generate different tracks for different grade levels and classroom moods.',
    },
    {
      question: 'What\'s the difference between calming classroom music and calm music for classroom?',
      answer:
        'Both terms describe the same thing: soft, instrumental background music for educational settings. Whether you search "calming classroom music", "calm music for classroom", or "calming music for classroom" — the need is the same, and Ace-Step generates the perfect track for any of these scenarios.',
    },
  ],
}

// ─── Mureka AI Alternative 页面配置 ───────────────────────────────────────────
export const murekaAlternativeConfig = {
  hero: {
    badge: 'Mureka AI Alternative',
    title: 'The Best Free Mureka AI Alternative in 2026',
    subtitle:
      'Looking for a Mureka AI alternative? ACE-Step 1.5 is the open-source music generator that\'s faster, free forever, and runs locally — no subscription required.',
    stats: [
      { value: '100%', label: 'Free & Open Source' },
      { value: '20s', label: 'Song Generation Speed' },
      { value: '50+', label: 'Languages Supported' },
    ],
    ctaText: 'Try ACE-Step Free →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: Unlock,
      title: 'Free Forever',
      description:
        'Unlike Mureka\'s paid subscription plans, ACE-Step 1.5 is 100% open-source and free — no credit limits, no paywalls.',
    },
    {
      icon: Cpu,
      title: 'Runs Locally',
      description:
        'Run ACE-Step on your own hardware. Your music stays private — no data sent to any server. Mureka is cloud-only.',
    },
    {
      icon: Zap,
      title: '10× Faster Generation',
      description:
        'Generate a full song in under 20 seconds on consumer GPU. Mureka\'s cloud queue can take 1–3 minutes.',
    },
    {
      icon: Globe,
      title: '50+ Languages',
      description:
        'ACE-Step supports vocals and lyrics in 50+ languages out of the box. Mureka supports 10 languages.',
    },
  ],
  steps: [
    {
      title: 'Describe Your Music',
      description: 'Type a text prompt like "upbeat pop song with female vocals, summer vibes"',
    },
    {
      title: 'AI Generates in Seconds',
      description: 'ACE-Step 1.5 creates a full structured song with verses, chorus, and bridge',
    },
    {
      title: 'Edit & Customize',
      description: 'Repaint sections, edit lyrics, or generate vocal covers — features Mureka lacks',
    },
    {
      title: 'Download & Use Anywhere',
      description: 'Export royalty-free music with zero licensing fees or attribution required',
    },
  ],
  examples: [
    {
      keyword: 'Pop with Vocals',
      prompt: 'Upbeat pop song with female vocals, summer vibes, catchy chorus, 3 minutes',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Hip-Hop Beat',
      prompt: 'Trap beat with 808s, dark atmosphere, slow tempo, instrumental, suitable for rap',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Cinematic Score',
      prompt: 'Epic cinematic orchestral music, building tension, perfect for trailer or film scene',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Lo-Fi Study',
      prompt: 'Lo-fi hip hop beats, rainy day, soft piano, perfect for studying or relaxing',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'EDM Club',
      prompt: 'EDM dance track with drop, energetic synths, 128 BPM, club-ready anthem',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Acoustic Folk',
      prompt: 'Acoustic folk song with gentle guitar, warm male vocals, storytelling mood, 2.5 minutes',
      difficulty: 'advanced' as const,
    },
  ],
  faq: [
    {
      question: 'Is ACE-Step really a free Mureka AI alternative?',
      answer:
        'Yes. ACE-Step 1.5 is 100% free and open-source under an Apache 2.0 license. Mureka offers a free tier with limited monthly credits. ACE-Step has no credit system — generate unlimited music with no subscription required.',
    },
    {
      question: 'How does ACE-Step compare to Mureka in music quality?',
      answer:
        'In independent benchmarks, ACE-Step 1.5 matches or exceeds Mureka V7 in most music quality metrics, including vocal realism, instrument accuracy, and structural coherence. Both tools produce professional-grade audio.',
    },
    {
      question: 'Can ACE-Step do voice cloning like Mureka?',
      answer:
        'Yes. ACE-Step 1.5 supports LoRA fine-tuning, which lets you train the model on your own voice with just a few samples. Mureka offers a similar voice cloning feature but only on paid plans.',
    },
    {
      question: 'What\'s the main reason people switch from Mureka to ACE-Step?',
      answer:
        'The top reasons: (1) No subscription cost, (2) Ability to run locally for privacy, (3) Faster generation speed on local hardware, (4) Full open-source control for developers and researchers.',
    },
    {
      question: 'Does ACE-Step support stem separation like Mureka?',
      answer:
        'Yes. ACE-Step 1.5 includes stem separation, cover generation, section repainting, and lyrics editing — matching most of Mureka\'s advanced features at zero cost.',
    },
  ],
}

// ─── ACE-Step vs Mureka 对比页配置 ────────────────────────────────────────────
export const vsAcestepVsMurekaConfig = {
  hero: {
    badge: 'Head-to-Head Comparison',
    title: 'ACE-Step 1.5 vs Mureka AI (2026)',
    subtitle:
      'The definitive comparison of two leading AI music generators. See which tool wins on price, speed, quality, and features.',
    stats: [
      { value: 'Free', label: 'ACE-Step Cost' },
      { value: '$10/mo', label: 'Mureka Starting Price' },
      { value: '2026', label: 'Updated For' },
    ],
    ctaText: 'Try ACE-Step Free →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: DollarSign,
      title: 'Price Winner: ACE-Step',
      description:
        'ACE-Step is 100% free and open-source. Mureka\'s free tier offers limited credits; paid plans start at $10/month.',
    },
    {
      icon: Zap,
      title: 'Speed Winner: ACE-Step',
      description:
        'ACE-Step generates a full song in ~20 seconds locally. Mureka\'s cloud generation takes 1–3 minutes in queue.',
    },
    {
      icon: Music,
      title: 'Quality: Tie',
      description:
        'Both produce professional-grade audio. ACE-Step edges ahead on structural coherence; Mureka excels on vocal realism.',
    },
    {
      icon: GitCompare,
      title: 'Features Winner: ACE-Step',
      description:
        'ACE-Step includes stem separation, cover generation, section repainting, LoRA fine-tuning — all free. Mureka locks these to paid tiers.',
    },
  ],
  steps: [
    {
      title: 'Define Your Use Case',
      description: 'Casual creator? Use ACE-Step free. Need cloud collaboration? Mureka may fit.',
    },
    {
      title: 'Test Both Tools',
      description: 'Both have free tiers. Generate the same prompt in each to compare quality directly.',
    },
    {
      title: 'Check Licensing Needs',
      description: 'ACE-Step: Apache 2.0, full commercial use. Mureka: commercial rights tied to paid plan.',
    },
    {
      title: 'Make Your Decision',
      description: 'For most users, ACE-Step wins on value. For team workflows, Mureka\'s cloud platform adds convenience.',
    },
  ],
  examples: [
    {
      keyword: 'Pop Song',
      prompt: 'Catchy pop song, female vocals, verse-chorus structure, summer energy, 3 minutes',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Hip-Hop',
      prompt: 'Modern hip-hop track, trap beat, 85 BPM, dark melodic hooks, no vocals',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Cinematic',
      prompt: 'Cinematic orchestral build, emotional piano, strings swelling, epic resolution',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Jazz Lounge',
      prompt: 'Smooth jazz lounge, upright bass, piano, brushed drums, sophisticated atmosphere',
      difficulty: 'advanced' as const,
    },
  ],
  faq: [
    {
      question: 'Is ACE-Step 1.5 better than Mureka AI?',
      answer:
        'For most users, yes — ACE-Step wins on price (free vs. paid), speed (local generation), and developer flexibility (open-source). Mureka wins on cloud convenience and a more polished web UI for non-technical users.',
    },
    {
      question: 'Can ACE-Step replace Mureka for professional music production?',
      answer:
        'Yes. ACE-Step 1.5 supports LoRA fine-tuning, stem separation, cover generation, and 50+ language vocals — covering most professional production workflows that Mureka offers.',
    },
    {
      question: 'Which has better vocal quality — ACE-Step or Mureka?',
      answer:
        'Mureka V8 slightly edges out in Chinese vocal realism. ACE-Step 1.5 excels in multi-language vocals (50+ languages vs. Mureka\'s 10) and structural vocal coherence across long songs.',
    },
    {
      question: 'Does Mureka have an open-source version like ACE-Step?',
      answer:
        'No. Mureka is a closed, proprietary SaaS platform. ACE-Step is fully open-source (Apache 2.0) — you can download, run locally, modify, and commercially use the model for free.',
    },
    {
      question: 'Which AI music generator is better for YouTube monetization?',
      answer:
        'Both produce royalty-free music. However, ACE-Step\'s Apache 2.0 license provides clearer commercial rights with no per-use fees. Mureka\'s commercial rights are tied to your subscription plan tier.',
    },
  ],
}

// ─── ACE-Step vs Suno 对比页配置 ─────────────────────────────────────────────
export const vsAcestepVsSunoConfig = {
  hero: {
    badge: 'ACE-Step vs Suno AI',
    title: 'ACE-Step 1.5 vs Suno AI: Which Wins in 2026?',
    subtitle:
      'Suno AI is the most popular AI music tool. ACE-Step 1.5 is the open-source challenger that\'s faster, free, and more powerful. Here\'s the full comparison.',
    stats: [
      { value: 'Free', label: 'ACE-Step Price' },
      { value: '$8+/mo', label: 'Suno Pro Price' },
      { value: '10-120×', label: 'Speed Advantage' },
    ],
    ctaText: 'Try ACE-Step Free →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: DollarSign,
      title: 'Cost: Free vs $8+/mo',
      description:
        'ACE-Step 1.5 is 100% free and open-source. Suno Pro costs $8/month; Suno Premier is $24/month. ACE-Step saves you $96–$288/year.',
    },
    {
      icon: Zap,
      title: '10–120× Faster',
      description:
        'ACE-Step generates a full song in 2 seconds on an A100 or ~20 seconds on an RTX 3090. Suno typically takes 30–90 seconds per song on their cloud.',
    },
    {
      icon: Shield,
      title: 'Privacy: Local vs Cloud',
      description:
        'ACE-Step runs 100% on your machine — your lyrics, prompts, and music never leave your computer. Suno processes everything on their servers.',
    },
    {
      icon: Sparkles,
      title: 'More Editing Features',
      description:
        'ACE-Step offers stem separation, cover generation, section repainting, and LoRA voice cloning — features Suno limits to paid tiers or doesn\'t offer at all.',
    },
  ],
  steps: [
    {
      title: 'Choose Your Priority',
      description: 'Need cloud convenience? Suno. Need speed + free + local control? ACE-Step.',
    },
    {
      title: 'Test with the Same Prompt',
      description: 'Run identical prompts in both tools to compare output quality for your specific style.',
    },
    {
      title: 'Check Commercial Licensing',
      description: 'ACE-Step: Apache 2.0, full commercial rights always. Suno: commercial use requires $8+/mo paid plan.',
    },
    {
      title: 'Scale Your Production',
      description: 'ACE-Step has no generation limits. Suno caps free users at 10 songs/day and charges for more.',
    },
  ],
  examples: [
    {
      keyword: 'Viral Pop',
      prompt: 'Viral pop song, catchy hook, upbeat energy, female vocals, radio-ready sound',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Dark Hip-Hop',
      prompt: 'Dark trap beat, 808 bass, atmospheric pads, minor key, suitable for rap over it',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Indie Folk',
      prompt: 'Indie folk song, fingerpicked acoustic guitar, male vocals, melancholic but hopeful, 3 minutes',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Game Soundtrack',
      prompt: 'Fantasy RPG game soundtrack, epic orchestral, adventure theme, heroic and sweeping',
      difficulty: 'advanced' as const,
    },
    {
      keyword: 'R&B Smooth',
      prompt: 'Smooth R&B track, soulful female vocals, late-night mood, sultry and relaxed',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Country Rock',
      prompt: 'Country rock anthem, electric guitar, strong male vocals, driving beat, arena-ready',
      difficulty: 'medium' as const,
    },
  ],
  faq: [
    {
      question: 'Is ACE-Step 1.5 better than Suno AI?',
      answer:
        'ACE-Step 1.5 outperforms Suno on speed (10–120× faster), price (free vs. $8+/mo), privacy (local vs. cloud), and developer features. Suno has a more polished web interface and is easier for non-technical users, but ACE-Step matches it on audio quality in most benchmarks.',
    },
    {
      question: 'Can ACE-Step replace Suno for YouTube content creation?',
      answer:
        'Yes. ACE-Step generates royalty-free music with full commercial rights (Apache 2.0) at no cost. Suno requires a paid plan for commercial use. For YouTube creators, ACE-Step offers better value with unlimited generations.',
    },
    {
      question: 'Does Suno have better vocal quality than ACE-Step?',
      answer:
        'Suno v5 has slightly higher vocal realism scores in some benchmarks. ACE-Step 1.5 produces comparable vocals and supports 50+ languages vs. Suno\'s primarily English-focused generation. For non-English music, ACE-Step often wins.',
    },
    {
      question: 'Can ACE-Step generate full songs with lyrics like Suno?',
      answer:
        'Yes. ACE-Step 1.5 generates complete songs with lyrics, vocals, instruments, and structured verse/chorus/bridge arrangements — identical to what Suno offers.',
    },
    {
      question: 'Is Suno safer for copyright than ACE-Step?',
      answer:
        'Both generate AI music that is royalty-free. ACE-Step\'s Apache 2.0 open-source license is legally clearer for commercial use. Suno\'s terms restrict commercial use to paid plans.',
    },
    {
      question: 'Why is ACE-Step faster than Suno?',
      answer:
        'ACE-Step 1.5 uses optimized local inference — it runs directly on your GPU. Suno uses shared cloud infrastructure, which means queue times and network latency. On an A100, ACE-Step generates a song in under 2 seconds.',
    },
  ],
}

// ─── Podcast Music 页面配置 ───────────────────────────────────────────────────
export const podcastMusicConfig = {
  hero: {
    badge: 'Podcast Creators',
    title: 'AI Music Generator for Podcasts',
    subtitle:
      'Create custom intro music, outro tracks, and background music for your podcast in seconds. Royalty-free, unique to your show, no licensing fees.',
    stats: [
      { value: '870+', label: 'Monthly Searches' },
      { value: '$1.05', label: 'High CPC (Monetizable)' },
      { value: '100%', label: 'Royalty-Free' },
    ],
    ctaText: 'Create Podcast Music Free →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: Radio,
      title: 'Unique Podcast Identity',
      description:
        'Stand out with a custom intro that\'s uniquely yours. Unlike stock music libraries, no two podcasters get the same track.',
    },
    {
      icon: Shield,
      title: 'No Licensing Nightmares',
      description:
        'Stock music libraries charge $20–$200/year. AI-generated music is royalty-free forever with no recurring license fees.',
    },
    {
      icon: Music,
      title: 'Intro + Outro + Bumpers',
      description:
        'Generate your intro theme, episode transition bumpers, and outro music — all matching your show\'s unique tone.',
    },
    {
      icon: Clock,
      title: 'Perfect Length Every Time',
      description:
        'Specify exactly how long you need: 15-second intro, 30-second outro, or 5-minute ambient background. AI nails it.',
    },
  ],
  steps: [
    {
      title: 'Describe Your Podcast Tone',
      description: 'Tell the AI your podcast\'s vibe: "professional and serious", "fun and casual", "mysterious true crime"',
    },
    {
      title: 'Choose Track Purpose',
      description: 'Specify intro, outro, transition bumper, or episode background music',
    },
    {
      title: 'AI Generates Your Theme',
      description: 'Get a unique, custom music track in under 20 seconds that perfectly matches your podcast brand',
    },
    {
      title: 'Use Across All Platforms',
      description: 'Upload to Spotify, Apple Podcasts, YouTube, RSS feeds — royalty-free on every platform',
    },
  ],
  examples: [
    {
      keyword: 'True Crime Intro',
      prompt: 'Dark suspenseful true crime podcast intro, tense strings, dramatic build, 20 seconds',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Business Podcast',
      prompt: 'Professional corporate podcast intro, confident piano, modern feel, 15 seconds, no vocals',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Comedy Show',
      prompt: 'Fun upbeat comedy podcast intro, quirky brass, playful energy, 20 seconds',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Wellness Podcast',
      prompt: 'Calm wellness podcast background music, gentle acoustic guitar, soothing and peaceful, 5 minutes',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Tech Podcast',
      prompt: 'Tech podcast intro, electronic synths, futuristic feel, modern and sharp, 15 seconds',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Interview Show',
      prompt: 'Warm conversational podcast background music, soft jazz piano, inviting and relaxed, instrumental',
      difficulty: 'medium' as const,
    },
  ],
  faq: [
    {
      question: 'Can I use AI music for my podcast intro without copyright issues?',
      answer:
        'Yes. AI-generated music from ACE-Step is royalty-free. Unlike using Spotify songs or YouTube music (which would get your podcast removed), AI-generated tracks are original creations with no underlying copyrighted samples.',
    },
    {
      question: 'How do I create a podcast intro with AI?',
      answer:
        'Simply describe your podcast\'s tone and genre in a text prompt. For example: "Upbeat news podcast intro, 15 seconds, professional and energetic, no vocals." The AI generates a custom track in seconds.',
    },
    {
      question: 'What\'s the best music for podcast intros?',
      answer:
        'The best podcast intro music matches your show\'s tone: true crime shows use dark, tense music; comedy podcasts use bright, quirky tracks; business shows use confident, professional sounds. Keep intros 15–30 seconds and outros 15–45 seconds.',
    },
    {
      question: 'Can I use the same AI-generated music across multiple podcast episodes?',
      answer:
        'Absolutely. Most podcasters generate one intro theme and reuse it every episode to build brand recognition. You can also generate variations for different segments or seasons.',
    },
    {
      question: 'Is AI podcast music good enough quality for Spotify and Apple Podcasts?',
      answer:
        'Yes. ACE-Step 1.5 generates studio-quality audio at professional bitrates. The music sounds indistinguishable from professionally composed tracks and meets all platform quality standards.',
    },
  ],
}

// ─── CapCut AI Music 页面配置 ─────────────────────────────────────────────────
export const capcutMusicConfig = {
  hero: {
    badge: 'CapCut Video Creators',
    title: 'AI Music Generator for CapCut Videos',
    subtitle:
      'CapCut\'s built-in music library is limited. Generate custom AI music that fits your video\'s exact mood, length, and style — royalty-free, forever.',
    stats: [
      { value: '+130%', label: 'CapCut Search Growth' },
      { value: '0', label: 'Copyright Claims' },
      { value: '∞', label: 'Unique Tracks' },
    ],
    ctaText: 'Create CapCut Music Free →',
    ctaHref: '/#waitlist',
  },
  benefits: [
    {
      icon: Video,
      title: 'Match Any Video Length',
      description:
        'Generate music that\'s exactly 15 seconds, 60 seconds, or 3 minutes — no cutting or fading needed. Perfect sync with your CapCut edit.',
    },
    {
      icon: TrendingUp,
      title: 'Beat CapCut\'s Library',
      description:
        'CapCut\'s music library uses the same tracks as millions of other creators. Stand out with unique AI-generated music that nobody else has.',
    },
    {
      icon: Shield,
      title: 'No Watermarks or Strikes',
      description:
        'Songs from CapCut\'s trending library can still trigger copyright claims when posted to YouTube. AI-generated music is 100% claim-free.',
    },
    {
      icon: Zap,
      title: 'Instant Generation',
      description:
        'Don\'t waste time browsing CapCut\'s library. Describe your vibe and get a custom track in 20 seconds — faster than finding the right song.',
    },
  ],
  steps: [
    {
      title: 'Identify Your Video Mood',
      description: 'Is your CapCut edit aesthetic, funny, motivational, or trending? Define the mood first.',
    },
    {
      title: 'Generate Custom Music',
      description: 'Type your prompt: "Aesthetic lo-fi for CapCut montage, soft beats, 60 seconds" and get instant results.',
    },
    {
      title: 'Download the Track',
      description: 'Export your AI music as MP3 in high quality — ready to import directly into CapCut\'s audio layer.',
    },
    {
      title: 'Add to CapCut & Publish',
      description: 'Import the track, sync it to your cuts, and post to TikTok, Instagram, or YouTube with zero copyright fear.',
    },
  ],
  examples: [
    {
      keyword: 'Aesthetic Montage',
      prompt: 'Aesthetic dreamy lo-fi music for CapCut montage, soft piano, 60 seconds, no vocals',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Gym Motivation',
      prompt: 'High energy gym motivation music, heavy bass, powerful beat drops, 90 seconds, no vocals',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Travel Vlog',
      prompt: 'Upbeat travel vlog music, acoustic guitar with light percussion, adventurous and happy, 2 minutes',
      difficulty: 'easy' as const,
    },
    {
      keyword: 'Day in My Life',
      prompt: 'Chill background music for day-in-my-life vlog, gentle pop feel, relatable and warm, 3 minutes',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Transition Beats',
      prompt: 'Sharp punchy transition beats for CapCut cuts, rhythmic hits every 2 seconds, 30 seconds',
      difficulty: 'medium' as const,
    },
    {
      keyword: 'Fashion Reel',
      prompt: 'Trendy fashion reel music, confident walk energy, modern pop production, 45 seconds',
      difficulty: 'easy' as const,
    },
  ],
  faq: [
    {
      question: 'Why shouldn\'t I just use CapCut\'s built-in music?',
      answer:
        'CapCut\'s library music is used by millions of other creators — your video won\'t stand out. Some CapCut trending songs can also trigger copyright claims on YouTube or Instagram. AI-generated music is unique to you and 100% claim-free on every platform.',
    },
    {
      question: 'How do I add AI music to CapCut?',
      answer:
        'Generate your track with ACE-Step, download it as MP3, then open CapCut → Add Audio → From Files → select your track. It\'s identical to adding any other audio file to your project.',
    },
    {
      question: 'Will AI music get copyright claims on TikTok or YouTube?',
      answer:
        'No. AI-generated music is original content with no underlying copyrighted samples. Unlike songs from music libraries or CapCut\'s trending tracks, AI music has never been flagged by Content ID or TikTok\'s music detection systems.',
    },
    {
      question: 'Can I use AI music for CapCut videos I\'ll monetize?',
      answer:
        'Yes. ACE-Step generates music under Apache 2.0 license, which allows full commercial use. You can monetize your CapCut videos on YouTube, TikTok, and Instagram without paying any licensing fees.',
    },
    {
      question: 'How do I make music that fits my CapCut video perfectly?',
      answer:
        'Specify the exact length in your prompt: "60-second upbeat track for CapCut, no vocals." Then use CapCut\'s beat sync feature to align your cuts to the music\'s rhythm automatically.',
    },
    {
      question: 'Is AI-generated music better than using no-copyright music from YouTube?',
      answer:
        'Yes, for several reasons: (1) AI music is unique — competitors can\'t use the same track; (2) YouTube no-copyright libraries often still require attribution; (3) AI music can be generated to exactly match your video\'s length and energy curve.',
    },
  ],
}
