using System;
using System.Collections;
using Projects.Scripts.Models;
using Spine.Unity;
using UnityEngine;
using Random = UnityEngine.Random;

namespace Projects.Scripts.GamePlay.CharacterController
{
    public class BallAnimation : MonoBehaviour
    {
        [SerializeField] private SkeletonAnimation skeleton;
        [SerializeField, SpineAnimation] private string idle,die,getHurt,drowning,revive,smile;
        [SerializeField, SpineAnimation] private string[] mix;
        private BallController _controller;
        
        public void Init(BallController controller)
        {
            _controller = controller;
            var skin = "Base";
            SetSkin(skin);
            PlayIdle();
        }

        public void PlayIdle()
        {
            if(_controller.IsDie()) return;
            skeleton.state.SetAnimation(0, idle, true);
            //PlayMix();
        }

        public void PlaySmile()
        {
            if(_controller.IsDie()) return;
            skeleton.state.SetAnimation(0, smile, true);
        }
        
        public void PlayHurt()
        {
            if(_controller.IsDie()) return;
            skeleton.state.SetEmptyAnimation(1,0);
            skeleton.state.SetAnimation(0, getHurt, true);
        }

        public void PlayDie(DamageType damageType,Action complete = null)
        {
            if (damageType == DamageType.Water)
            {
                skeleton.state.SetEmptyAnimation(1,0);
                var entry = skeleton.state.SetAnimation(0, drowning, false);
                entry.Complete += (et) =>
                {
                    skeleton.state.SetAnimation(0, die, false);
                    StartCoroutine(Die(1f, complete));
                };
            }
            else if (damageType == DamageType.Object||damageType == DamageType.Enemy)
            {
                skeleton.state.SetAnimation(0, die, false);
                StartCoroutine(Die(1f, complete));
            }
        }

        public void PlayRevive()
        {
            if(_controller.IsDie()) return;
            var trackEntry = skeleton.state.SetAnimation(0, revive, false);
            trackEntry.Complete += (et) =>
            {
                PlayIdle();
            };
        }
        private IEnumerator Die(float duration,Action complete)
        {
            yield return new WaitForSecondsRealtime(duration);
            complete?.Invoke();
        }

        public void PlayMix()
        {
            var r = Random.Range(0, mix.Length);
            var entry = skeleton.state.SetAnimation(1, mix[r], false);
            entry.Complete += trackEntry =>
            {
                PlayMix();
            };
        }

        public void SetSkin(string skin)
        {
            skeleton.initialSkinName = skin;
            skeleton.Initialize(true);
        }
    }
}