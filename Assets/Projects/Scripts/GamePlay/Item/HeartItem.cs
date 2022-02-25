using System;
using DG.Tweening;
using Projects.Scripts.GamePlay.Sound;
using Projects.Scripts.UIController;
using Spine.Unity;
using ThirdParties.Truongtv.SoundManager;
using UnityEngine;

namespace Projects.Scripts.GamePlay.Item
{
    public class HeartItem : MonoBehaviour
    {
        [SerializeField] private bool watchAd;
        [SerializeField] private Transform icon;

        [SerializeField] private GameObject adsIcon,container,effect;
        [SerializeField] private SkeletonAnimation skeleton;
        [SerializeField,SpineAnimation] private string idleAnim, triggerAnim;
        [SerializeField] private Collider2D collider;
        [SerializeField] private SimpleAudio audio;
        [SerializeField] private AudioClip stay, move;
        private void Start()
        {
            icon.DOMoveY(0.5f, 1f).SetRelative(true).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
            skeleton.state.SetAnimation(0, idleAnim, true);
            audio.Play(stay,true);
        }


        public void OnTriggerEnter2D(Collider2D coll)
        {
            GamePlayController.Instance.CollectLife(1,icon);
            container.gameObject.SetActive(false);
            SoundInGameManager.Instance.PlayBallCollectHeart();
            skeleton.state.SetAnimation(0, triggerAnim, true);
            collider.enabled = false;
            effect.SetActive(true);
            icon.DOKill();
            icon.DOMoveY(100f,5f).SetDelay(1f).SetSpeedBased(true).SetRelative(true).SetEase(Ease.OutSine).OnStart(
                () =>
                {
                    audio.Play(move);
                });
        }
#if UNITY_EDITOR
        private void OnDrawGizmosSelected()
        {
            if (watchAd)
            {
                adsIcon.SetActive(true);
            }
            else
            {
                adsIcon.SetActive(false);
            }
        }
#endif
        
    }
}