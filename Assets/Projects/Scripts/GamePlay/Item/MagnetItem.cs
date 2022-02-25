using System;
using DG.Tweening;
using Projects.Scripts.GamePlay.Sound;
using Projects.Scripts.UIController;
using Spine.Unity;
using ThirdParties.Truongtv.SoundManager;
using UnityEngine;

namespace Projects.Scripts.GamePlay.Item
{
    public class MagnetItem : MonoBehaviour
    {
        [SerializeField] private Transform icon;
        [SerializeField] private GameObject adsIcon,container,effect;
        [SerializeField] private SkeletonAnimation skeleton;
        [SerializeField,SpineAnimation] private string idleAnim, triggerAnim;
        [SerializeField] private Collider2D collider;
        [SerializeField] private SimpleAudio audio;
        [SerializeField] private AudioClip stay, move;
        private void Start()
        {
            icon.DOKill();
            icon.DOLocalMoveY(0.5f,1f).SetRelative(true).SetEase(Ease.InOutSine).SetLoops(-1,LoopType.Yoyo);

            skeleton.state.SetAnimation(0, idleAnim, true);
            audio.Play(stay,true);
            collider = GetComponent<Collider2D>();
        }
        private void OnTriggerEnter2D(Collider2D other)
        {
            TriggerEnter(other);
        }
        public void TriggerEnter(Collider2D coll)
        {
            GamePlayController.Instance.CollectMagnet(icon);
            skeleton.state.SetAnimation(0, triggerAnim, true);
            collider.enabled = false;
            effect.SetActive(true);
            container.gameObject.SetActive(false);
            icon.DOKill();
            icon.DOMoveY(100f,5f).SetDelay(1f).SetSpeedBased(true).SetRelative(true).SetEase(Ease.OutSine).OnStart(
                () =>
                {
                    audio.Play(move);
                });
            SoundInGameManager.Instance.PlayBallCollectMagnet();
        }
#if UNITY_EDITOR
        private void OnDrawGizmosSelected()
        {
            
        }
#endif
    }
}