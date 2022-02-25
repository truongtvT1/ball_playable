using System;
using DG.Tweening;
using Projects.Scripts.UIController;
using ThirdParties.Truongtv.SoundManager;
using TMPro;
using Truongtv.Utilities;
using UnityEngine;

namespace Projects.Scripts.GamePlay.Item
{
    public class Coin : MonoBehaviour
    {
        [SerializeField] private GameObject icon, effect;
        [SerializeField] private Collider2D collider;
        [SerializeField] private LayerMask mask;

        private void Start()
        {
            collider = GetComponent<Collider2D>();
        }

        private void OnTriggerEnter2D(Collider2D other)
        {
            TriggerEnter(other);
        }

        private void Update()
        {
            if (GamePlayController.Instance.IsMagnetActive())
            {
                var distance = Vector2.Distance(GamePlayController.Instance.ball.transform.position,
                    transform.position);
                if (distance <= 4 && collider.enabled)
                {
                    collider.enabled = false;
                    var duration = 0.5f;
                    var tween = transform.DOMove(GamePlayController.Instance.ball.transform.position, duration);
                    GamePlayController.Instance.SetCollectingCurrency();
                    tween.OnUpdate(() =>
                    {
                        duration -= tween.Elapsed();
                        if(duration>0)
                            tween.ChangeEndValue(GamePlayController.Instance.ball.transform.position,duration,true);
               
                    });
                    tween.OnComplete(()=>
                    {
                        GamePlayController.Instance.SetCollectedCurrency();
                        OnCollect();
                    });
                }
            }
        }

        public void TriggerEnter(Collider2D collider2D)
        {
            if(!Extended.IsInLayerMask(collider2D.gameObject,mask)) return;
            collider.enabled = false;
            if (GamePlayController.Instance.IsMagnetActive())
            {
                var duration = 0.5f;
                var tween = transform.DOMove(collider2D.transform.position, duration);
                GamePlayController.Instance.SetCollectingCurrency();
                tween.OnUpdate(() =>
                {
                    duration -= tween.Elapsed();
                    if(duration>0)
                        tween.ChangeEndValue(collider2D.transform.position,duration,true);
               
                });
                tween.OnComplete(()=>
                {
                    GamePlayController.Instance.SetCollectedCurrency();
                    OnCollect();
                });
            }
            else
            {
                OnCollect();
            }
            
            
        }
        private void OnCollect()
        {
            var value = 100;
            GamePlayController.Instance.CollectCoin(value,icon.transform);
            effect.transform.position = icon.transform.position;
            effect.SetActive(true);
            icon.SetActive(false);
        }
    }
}