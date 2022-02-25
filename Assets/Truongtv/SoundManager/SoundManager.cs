using System;
using System.Collections.Generic;
using Truongtv.Utilities;
using UnityEngine;

namespace ThirdParties.Truongtv.SoundManager
{
    public class SoundManager : MonoBehaviour
    {
        private const string INSERT_KEY = "_number_";
        private const string SOUND_SFX = "sfx";
        private const string SOUND_BGM = "bgm";
        public static Action<bool> OnBgmSettingChange;
        public static Action<bool> OnSfxSettingChange;
        [SerializeField] private Sfx sfxPrefab;
        [SerializeField] private List<Sfx> sfxList;
        [SerializeField] private AudioClip buttonSound, popupOpenSound, popupCloseSound;
        
        private static SoundManager _instance;
        public static SoundManager Instance => _instance;

        private void Awake()
        {
            if (_instance != null)
            {
                Destroy(_instance.gameObject);
            }

            _instance = this;
        }
        public static bool IsBgm()
        {
            return PlayerPrefs.GetInt(SOUND_BGM) == 0;
        }

        public static bool IsSfx()
        {
            return PlayerPrefs.GetInt(SOUND_SFX) == 0;
        }

        public static void SetSfx(bool isOn)
        {
            OnSfxSettingChange?.Invoke(isOn);
            PlayerPrefs.SetInt(SOUND_SFX, isOn?0:-1);
            PlayerPrefs.Save();
        }
        public static void SetBgm(bool isOn)
        {
            OnBgmSettingChange?.Invoke(isOn);
            PlayerPrefs.SetInt(SOUND_BGM, isOn?0:-1);
            PlayerPrefs.Save();
        }
        public void PlaySfx(AudioClip clip, bool isLoop = false,float delay = 0f,Action onComplete = null)
        {
            var simple = GetSfxInstance();
            simple.Play(clip, isLoop,delay,onComplete);
        }

        public void PlayBgm(AudioClip clip)
        {
            if(!Bgm.Instance.IsPlaying())
                Bgm.Instance.Play(clip);
            else
            {
                if(Bgm.Instance.IsPlayingClip(clip))
                    Bgm.Instance.Resume();
                else
                    Bgm.Instance.Play(clip);
            }
        }
        public void Pause(bool isPause)
        {
            if (isPause)
            {
                Bgm.Instance.Pause();
                for (var i = 0; i < sfxList.Count; i++)
                {
                    sfxList[i].Pause();
                }
            }

            else
            {
                Bgm.Instance.Resume();
                for (var i = 0; i < sfxList.Count; i++)
                {
                    sfxList[i].Resume();
                }
            }
        }
        private Sfx GetSfxInstance()
        {
            if (sfxPrefab == null)
                return null;
            for (var i = 0; i < sfxList.Count; i++)
            {
                if (sfxList[i].gameObject.activeSelf) continue;
                sfxList[i].gameObject.SetActive(true);
                return sfxList[i];
            }
            var count = sfxList.Count;
            var go = Instantiate(sfxPrefab, transform);
            go.transform.SetParent(transform);
            go.gameObject.name = SOUND_SFX + INSERT_KEY + count;
            sfxList.Add(go);
            return go;
        }

        public void PlayPopupOpenSound()
        {
            PlaySfx(popupOpenSound);
        }
        public void PlayPopupCloseSound()
        {
            PlaySfx(popupCloseSound);
        }
        
        public void PlayButtonSound(Action complete = null)
        {
            PlaySfx(buttonSound,onComplete:complete);
        }
    }
}
