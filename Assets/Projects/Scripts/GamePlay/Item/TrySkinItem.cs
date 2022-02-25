using System;
using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using Projects.Scripts.GamePlay.Sound;
using Projects.Scripts.UIController;
using Spine.Unity;
using ThirdParties.Truongtv.SoundManager;
using UnityEngine;
using Random = UnityEngine.Random;

namespace Projects.Scripts.GamePlay.Item
{
    public class TrySkinItem : MonoBehaviour
    {
        [SerializeField] private Transform icon;
        [SerializeField] private SkeletonAnimation skin;
        [SerializeField] private GameObject adsIcon,container,effect;
        [SerializeField] private string _trySkinName;
        [SerializeField] private Collider2D collider;
        [SerializeField] private SimpleAudio audio;
        [SerializeField] private AudioClip stay, move;
        private void OnValueChange()
        {
            if (!string.IsNullOrEmpty(_trySkinName))
            {
                skin.initialSkinName = _trySkinName ;
                skin.Initialize(true);
                
            }
        }

        private void Start()
        {
            icon.DOKill();
            icon.DOLocalMoveY(0.5f,1f).SetRelative(true).SetEase(Ease.InOutSine).SetLoops(-1,LoopType.Yoyo);
            OnValueChange();
            audio.Play(stay,true);
            collider = GetComponent<Collider2D>();
        }
        
        private void OnTriggerEnter2D(Collider2D other)
        {
            TrySkin();
        }

        public void TrySkin()
        {
            Active();
        }

        void Active()
        {
            effect.SetActive(true);
            Destroy(collider);
            container.gameObject.SetActive(false);
            SoundInGameManager.Instance.PlayBallTrySkin();
            GamePlayController.Instance.ball.animation.SetSkin(_trySkinName);
            GamePlayController.Instance.SetSkin(_trySkinName);
            
            icon.DOKill();
            icon.DOMoveY(100f,5f).SetDelay(1f).SetSpeedBased(true).SetRelative(true).SetEase(Ease.OutSine).OnStart(
                () =>
                {
                    audio.Play(move);
                })
                .OnComplete(() =>
                {
                    Destroy(gameObject);
                });
        }
        
#if UNITY_EDITOR
        private void OnDrawGizmosSelected()
        {
            
        }
#endif
    }
}