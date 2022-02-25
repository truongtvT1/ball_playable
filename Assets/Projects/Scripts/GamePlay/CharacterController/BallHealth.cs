using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Projects.Scripts.GamePlay.Sound;
using Projects.Scripts.Models;
using Projects.Scripts.UIController;
using UnityEngine;

namespace Projects.Scripts.GamePlay.CharacterController
{
    public class BallHealth : MonoBehaviour
    {
        
        [SerializeField] private int maxHp;
        [SerializeField] private int currentHp;
        [SerializeField] private Vector2 damageForce,waterForce;
        [SerializeField] private GameObject damageEffect,icon,dieEffect;
        public bool isDie;
        private bool _inviolable;
        private BallController _controller;
        private bool _firstTimeDieWithType;
        public void Init(BallController controller)
        {
            _controller = controller;
        }
        private void Start()
        {
            currentHp = maxHp;
        }

        public void Damage(DamageType damageType, int damage,Transform damageObj)
        {
            if(isDie) return;
            if(_inviolable) return;
            currentHp -= damage;
            GamePlayController.Instance.BallDamaged(currentHp);
            if (currentHp > 0)
            {
                
                if (damageObj.position.x < transform.position.x)
                {
                    if(damageType!= DamageType.Water)
                        _controller.SetForce(new Vector2(Mathf.Abs(damageForce.x),damageForce.y),true);
                    else
                        _controller.SetForce(new Vector2(Mathf.Abs(waterForce.x),waterForce.y),true);
                }
                else
                {
                    var force = new Vector2(-Mathf.Abs(damageForce.x),damageForce.y);
                    _controller.SetForce(force,true);
                }
                SoundInGameManager.Instance.PlayBallDamagedSound();
                SetInviolable();
            }

            else
                Die(damageType);
        }

        private void Die(DamageType damageType)
        {
            isDie = true;
            GamePlayController.Instance.PauseWhenBallDie();
            SoundInGameManager.Instance.PlayBallDieSound();
            _controller.animation.PlayDie(damageType,() =>
            {
                icon.SetActive(false);
                dieEffect.SetActive(true);
                SoundInGameManager.Instance.PlayBallExplode();
                StartCoroutine(DieComplete());
            });
        }

        private IEnumerator DieComplete()
        {
            while (dieEffect.activeSelf)
            {
                yield return null;
            }
            GamePlayController.Instance.BallDie();
        }
        public void Revive()
        {
            isDie = false;
            currentHp = maxHp;
            icon.SetActive(true);
            dieEffect.SetActive(false);
            _controller.animation.PlayRevive();
            _inviolable = true;
            int result = 0;
            _controller.SetCanDamage(false);
            DOTween.To(() => 0, x => result = x, 16, 1f)
                .SetEase(Ease.Linear)
                .OnUpdate(() => { damageEffect.SetActive(result % 2 != 0); })
                .OnComplete(() =>
                {
                    _inviolable = false; 
                    _controller.animation.PlayIdle();
                    _controller.SetCanDamage(true);
                });
        }
        private void SetInviolable()
        {
            _inviolable = true;
            int result = 0;
            _controller.animation.PlayHurt();
            _controller.SetCanDamage(false);
            DOTween.To(() => 0, x => result = x, 16, 1f)
                .SetEase(Ease.Linear)
                .OnUpdate(() => { damageEffect.SetActive(result % 2 != 0); })
                .OnComplete(() =>
                {
                    _inviolable = false; 
                    _controller.animation.PlayIdle();
                    _controller.SetCanDamage(true);
                });
        }
    }
}