using System;
using UnityEngine;

namespace ThirdParties.Truongtv.SoundManager
{
    public class Sfx : BaseAudio
    {
        
        private void Start()
        {
            SoundManager.OnSfxSettingChange += OnSettingChange;
        }
        private void OnDestroy()
        {
            SoundManager.OnSfxSettingChange -= OnSettingChange;
        }
        private void OnSettingChange(bool isOn)
        {
            AudioSource.mute = !isOn;
        }

        public void Play(AudioClip clip, bool isLoop = false, float delay = 0f, Action complete = null)
        {
            AudioSource.mute = !SoundManager.IsSfx();
            if (isLoop)
            {
                PlayLoop(clip);
                return;
            }
            PlayOnceShot(clip,delay,complete);
        }
    }
}
