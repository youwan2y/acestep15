// SEO 页面图片配置
// 所有图片路径相对于 public 目录

export const seoImages = {
  // YouTube 相关图片
  youtube: {
    creatorStudio: '/images/seo/youtube-creator-studio.svg',
    editingTimeline: '/images/seo/youtube-editing-timeline.svg',
    vlogRecording: '/images/seo/youtube-vlog-recording.svg',

    // 图片库 - 用于 ImageGallery 组件
    gallery: [
      {
        src: '/images/seo/youtube-creator-studio.svg',
        alt: 'YouTube Creator Studio',
        caption: 'Professional YouTube creator workspace setup',
      },
      {
        src: '/images/seo/youtube-editing-timeline.svg',
        alt: 'Video Editing Timeline',
        caption: 'Editing interface with music waveform visualization',
      },
      {
        src: '/images/seo/youtube-vlog-recording.svg',
        alt: 'Vlog Recording',
        caption: 'Content creator recording vlog at home',
      },
    ],
  },

  // 音频相关图片
  audio: {
    visualization: '/images/seo/audio-visualization.svg',
    musicStudio: '/images/seo/music-studio.svg',
    djMixer: '/images/seo/dj-mixer.svg',

    gallery: [
      {
        src: '/images/seo/audio-visualization.svg',
        alt: 'Audio Visualization',
        caption: 'Colorful sound wave visualization',
      },
      {
        src: '/images/seo/music-studio.svg',
        alt: 'Music Production Studio',
        caption: 'Professional music production setup',
      },
      {
        src: '/images/seo/dj-mixer.svg',
        alt: 'DJ Mixer',
        caption: 'DJ equipment with LED lights',
      },
    ],
  },

  // 案例研究图片
  caseStudies: {
    youtubeSuccess: '/images/seo/youtube-success-story.svg',
    podcastRecording: '/images/seo/podcast-recording.svg',
    meditationTeacher: '/images/seo/meditation-teacher.svg',

    gallery: [
      {
        src: '/images/seo/youtube-success-story.svg',
        alt: 'YouTube Success Story',
        caption: 'Creator celebrating subscriber milestone',
      },
      {
        src: '/images/seo/podcast-recording.svg',
        alt: 'Podcast Recording',
        caption: 'Professional podcast studio setup',
      },
      {
        src: '/images/seo/meditation-teacher.svg',
        alt: 'Meditation Teacher',
        caption: 'Teaching meditation in peaceful studio',
      },
    ],
  },

  // 数据可视化图片
  data: {
    dashboard: '/images/seo/analytics-dashboard.svg',
    growthChart: '/images/seo/growth-chart.svg',

    gallery: [
      {
        src: '/images/seo/analytics-dashboard.svg',
        alt: 'Analytics Dashboard',
        caption: 'Business analytics with growth charts',
      },
      {
        src: '/images/seo/growth-chart.svg',
        alt: 'Growth Chart',
        caption: 'Upward trending financial growth',
      },
    ],
  },

  // 教程图片
  tutorial: {
    guide: '/images/seo/tutorial-guide.svg',
    learning: '/images/seo/learning-music-production.svg',

    gallery: [
      {
        src: '/images/seo/tutorial-guide.svg',
        alt: 'Tutorial Guide',
        caption: 'Step-by-step tutorial interface',
      },
      {
        src: '/images/seo/learning-music-production.svg',
        alt: 'Learning Music Production',
        caption: 'Person learning music production online',
      },
    ],
  },

  // 冥想图片
  meditation: {
    peaceful: '/images/seo/meditation-peaceful.svg',
    yogaStudio: '/images/seo/yoga-studio.svg',
    sleep: '/images/seo/sleep-relaxation.svg',

    gallery: [
      {
        src: '/images/seo/meditation-peaceful.svg',
        alt: 'Peaceful Meditation',
        caption: 'Person meditating in nature',
      },
      {
        src: '/images/seo/yoga-studio.svg',
        alt: 'Yoga Studio',
        caption: 'Modern yoga studio with natural light',
      },
      {
        src: '/images/seo/sleep-relaxation.svg',
        alt: 'Sleep & Relaxation',
        caption: 'Peaceful sleep environment',
      },
    ],
  },

  // YouTube Shorts 图片
  shorts: {
    recording: '/images/seo/shorts-recording.svg',
    viral: '/images/seo/viral-content.svg',

    gallery: [
      {
        src: '/images/seo/shorts-recording.svg',
        alt: 'Shorts Recording',
        caption: 'Creating vertical video content',
      },
      {
        src: '/images/seo/viral-content.svg',
        alt: 'Viral Content',
        caption: 'Trending social media content creation',
      },
    ],
  },

  // 对比页面图片
  comparison: {
    versus: '/images/seo/comparison-versus.svg',
    features: '/images/seo/feature-comparison.svg',

    gallery: [
      {
        src: '/images/seo/comparison-versus.svg',
        alt: 'Feature Comparison',
        caption: 'Side by side comparison visualization',
      },
      {
        src: '/images/seo/feature-comparison.svg',
        alt: 'Comparison Checklist',
        caption: 'Pros and cons evaluation',
      },
    ],
  },
}

// 使用示例:
/*
import { seoImages } from '@/lib/seo-images'
import ImageGallery from '@/components/seo-pages/ImageGallery'

export default function YouTubePage() {
  return (
    <div>
      <ImageGallery
        images={seoImages.youtube.gallery}
        title="YouTube Creator Examples"
      />
    </div>
  )
}
*/
