using System.Collections;
using Projects.Scripts.GamePlay.Sound;
using Projects.Scripts.Models;
using Truongtv.Utilities;
using UnityEngine;

namespace Projects.Scripts.GamePlay.CharacterController
{
    public class BallAttack : MonoBehaviour
    {
        [SerializeField] private float pauseDuration,timeScale;
        [SerializeField] private LayerMask attackLayer;
        [SerializeField] private Vector2 attackForce;
        private BallController _controller;
        public void Init(BallController controller)
        {
            _controller = controller;
        }
        public void OnAttackEnemy(Collision2D coll)
        {
            if(!Extended.IsInLayerMask(coll.gameObject,attackLayer)) return;
            _controller.SetForce(attackForce,false);
            StopAllCoroutines();
            SoundInGameManager.Instance.PlayBallAttackSound();
            StartCoroutine(AfterDamage());

        }

        private IEnumerator AfterDamage()
        {
            Time.timeScale = timeScale;
            yield return new WaitForSecondsRealtime(pauseDuration);
            Time.timeScale = 1f;
        }
    }
}