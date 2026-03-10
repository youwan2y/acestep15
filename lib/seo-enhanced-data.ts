// 示例数据配置 - 用于增强页面内容的独特性
import { Video, Music, Mic } from 'lucide-react'

// 音频示例数据
export const audioExamplesData = {
  youtube: [
    {
      title: 'Energetic Vlog Intro',
      description: 'Upbeat electronic intro music perfect for YouTube vlogs and lifestyle content',
      prompt: 'Upbeat electronic intro music, energetic synth melody, 15 seconds',
      duration: '0:15',
      genre: 'Electronic',
    },
    {
      title: 'Cinematic Background',
      description: 'Dramatic cinematic music for documentary and storytelling videos',
      prompt: 'Cinematic orchestral background music, dramatic and emotional, soft strings',
      duration: '2:30',
      genre: 'Cinematic',
    },
    {
      title: 'Lo-fi Study Beats',
      description: 'Relaxing lo-fi hip hop beats for study and focus videos',
      prompt: 'Lo-fi hip hop beats, chill and relaxing, jazz samples, study music',
      duration: '3:00',
      genre: 'Lo-fi',
    },
    {
      title: 'Tech Review Background',
      description: 'Modern tech-inspired background music for product reviews',
      prompt: 'Modern tech background music, futuristic synthesizer, minimal beats',
      duration: '1:45',
      genre: 'Tech',
    },
    {
      title: 'Gaming Montage',
      description: 'High-energy EDM track for gaming montages and highlights',
      prompt: 'High-energy EDM track, heavy bass, fast tempo, gaming montage music',
      duration: '2:15',
      genre: 'EDM',
    },
    {
      title: 'Cooking Show Theme',
      description: 'Warm and inviting background music for cooking videos',
      prompt: 'Warm acoustic guitar background, cheerful and inviting, cooking show music',
      duration: '1:30',
      genre: 'Acoustic',
    },
  ],
  meditation: [
    {
      title: 'Deep Meditation',
      description: 'Deep ambient soundscape for meditation and mindfulness practice',
      prompt: 'Deep ambient meditation music, slow evolving pads, binaural beats 432Hz',
      duration: '10:00',
      genre: 'Ambient',
    },
    {
      title: 'Morning Yoga Flow',
      description: 'Gentle and uplifting music for yoga and stretching routines',
      prompt: 'Gentle yoga music, soft piano with nature sounds, peaceful morning vibes',
      duration: '5:00',
      genre: 'Yoga',
    },
    {
      title: 'Sleep & Relaxation',
      description: 'Ultra-calm ambient music for sleep and deep relaxation',
      prompt: 'Ultra-calm ambient music for sleep, soft drones, no melody, very minimal',
      duration: '15:00',
      genre: 'Sleep',
    },
  ],
  shorts: [
    {
      title: 'Trending Dance',
      description: 'Viral dance music for TikTok and YouTube Shorts',
      prompt: 'Viral dance music, catchy beat drop, trending sound, 30 seconds',
      duration: '0:30',
      genre: 'Dance',
    },
    {
      title: 'Funny Moment',
      description: 'Quirky and funny background music for comedy shorts',
      prompt: 'Funny quirky music, silly sound effects, comedy background, 15 seconds',
      duration: '0:15',
      genre: 'Comedy',
    },
    {
      title: 'Epic Reveal',
      description: 'Dramatic music for reveal and transformation shorts',
      prompt: 'Epic dramatic reveal music, building tension, powerful climax, 60 seconds',
      duration: '1:00',
      genre: 'Epic',
    },
  ],
}

// 案例研究数据
export const caseStudiesData = {
  youtube: [
    {
      name: 'Sarah Chen',
      role: 'Lifestyle Vlogger',
      platform: 'YouTube',
      icon: Video,
      stats: [
        { label: 'Subscribers Growth', value: '+340%' },
        { label: 'Watch Time', value: '+67%' },
      ],
      quote:
        'Ace-Step completely transformed my content. I used to spend hours searching for royalty-free music. Now I generate custom tracks in seconds that perfectly match my vlogs. My engagement has skyrocketed!',
      beforeAfter: {
        before: 'Spent 3+ hours per video finding music, frequent copyright claims',
        after: 'Generate perfect music in 30 seconds, zero copyright issues',
      },
    },
    {
      name: 'Marcus Johnson',
      role: 'Tech Reviewer',
      platform: 'YouTube',
      icon: Video,
      stats: [
        { label: 'Videos per Week', value: '5x' },
        { label: 'Revenue Increase', value: '+$2.4K/mo' },
      ],
      quote:
        'As a tech reviewer, I need fresh background music for every video. Ace-Step lets me create tech-inspired tracks that sound professional and keep my viewers engaged. Game changer!',
      beforeAfter: {
        before: 'Reused same 5 tracks, viewers complained about repetition',
        after: 'Unique music for each video, viewers love the variety',
      },
    },
  ],
  meditation: [
    {
      name: 'Dr. Emily Waters',
      role: 'Meditation Instructor',
      platform: 'Calm & Headspace',
      icon: Music,
      stats: [
        { label: 'Sessions Created', value: '200+' },
        { label: 'User Retention', value: '+89%' },
      ],
      quote:
        'Creating meditation music used to require expensive composers. With Ace-Step, I can generate custom ambient tracks for each meditation session. My students love the unique soundscapes.',
      beforeAfter: {
        before: 'Limited to stock music, $500+ per custom track',
        after: 'Unlimited custom tracks, zero additional cost',
      },
    },
  ],
  podcast: [
    {
      name: 'Alex Rivera',
      role: 'Podcast Host',
      platform: 'Spotify & Apple',
      icon: Mic,
      stats: [
        { label: 'Episodes Created', value: '150+' },
        { label: 'Listener Growth', value: '+156%' },
      ],
      quote:
        'Every episode needs intro, outro, and transition music. Ace-Step lets me create a cohesive sonic brand across all 150+ episodes. My listeners recognize my podcast instantly now.',
      beforeAfter: {
        before: 'Generic podcast music, no brand identity',
        after: 'Custom branded music, recognizable audio identity',
      },
    },
  ],
}

// 数据可视化数据
export const dataVisualizationData = {
  youtube: {
    stats: [
      { label: 'Monthly Searches', value: '50K+', trend: '+23%', icon: 'TrendingUp' },
      { label: 'YouTube Creators', value: '2M+', trend: '+45%', icon: 'Users' },
      { label: 'Avg. Generation Time', value: '25s', icon: 'Clock' },
      { label: 'Satisfaction Rate', value: '94%', icon: 'Zap' },
    ],
    trends: [
      { month: 'Jan', searches: 32000 },
      { month: 'Feb', searches: 38000 },
      { month: 'Mar', searches: 45000 },
      { month: 'Apr', searches: 52000 },
      { month: 'May', searches: 61000 },
      { month: 'Jun', searches: 72000 },
    ],
  },
  meditation: {
    stats: [
      { label: 'Wellness Market', value: '$5.6T', trend: '+12%', icon: 'TrendingUp' },
      { label: 'Meditation Apps', value: '2,500+', trend: '+67%', icon: 'Users' },
      { label: 'Avg. Session Length', value: '12m', icon: 'Clock' },
      { label: 'User Growth', value: '+234%', icon: 'Zap' },
    ],
    trends: [
      { month: 'Jan', searches: 18000 },
      { month: 'Feb', searches: 22000 },
      { month: 'Mar', searches: 28000 },
      { month: 'Apr', searches: 35000 },
      { month: 'May', searches: 44000 },
      { month: 'Jun', searches: 55000 },
    ],
  },
}
