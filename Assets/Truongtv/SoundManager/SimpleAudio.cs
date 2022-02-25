using UnityEngine;

namespace ThirdParties.Truongtv.SoundManager
{
    public class SimpleAudio : BaseAudio
    {
        [SerializeField] public bool autoPlay,loop;
        private void Start()
        {
            SoundManager.OnSfxSettingChange += OnSettingChange;
            AudioSource.loop = loop;
            if (autoPlay)
            {
                AudioSource.Play();
            }
        }
        private void OnDestroy()
        {
            SoundManager.OnSfxSettingChange -= OnSettingChange;
        }
        private void OnSettingChange(bool isOn)
        {
            AudioSource.mute = !isOn;
        }

        public void Play()
        {
            AudioSource.Play();
        }

        public void Play(AudioClip clip, bool isLoop = false)
        {
            AudioSource.loop = isLoop;
            AudioSource.clip = clip;
            AudioSource.Play();
        }

        public void SetLoop(bool auto)
        {
            AudioSource.loop = auto;
        }

        public new void Stop()
        {
            AudioSource.Stop();
            AudioSource.clip = null;
        }
    }
}
