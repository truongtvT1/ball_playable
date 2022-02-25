using System;
using DG.Tweening;
using Projects.Scripts.GamePlay.Sound;
using Projects.Scripts.Models;
using Projects.Scripts.UIController;
using UnityEngine;

namespace Projects.Scripts.GamePlay.CharacterController
{
    public class BallController : MonoBehaviour
    {
        [SerializeField] private BallMagnetic magnetic;
        [SerializeField] private BallMovement movement;
        [SerializeField] private BallHealth health;
        [SerializeField] public BallAnimation animation;
        [SerializeField] private BallAttack attack;
        [SerializeField] private GameObject attackTransform,heartEffect;
        private MoveDirection _touchDirection = MoveDirection.None;
        private bool _holdJump;
        private static BallController _instance;
        public static BallController Instance => _instance;
        private void Awake()
        {
            if (_instance != null)
            {
                Destroy(_instance.gameObject);
            }

            _instance = this;
           
        }
        private void Start()
        {
            magnetic.Init(this);
            movement.Init(this);
            health.Init(this);
            attack.Init(this);
            animation.Init(this);
        }

        private void Update()
        {
            
            if (Input.GetKey(KeyCode.LeftArrow))
                _touchDirection = MoveDirection.Left;
            if (Input.GetKey(KeyCode.RightArrow))
                _touchDirection = MoveDirection.Right;
            if (Input.GetKey(KeyCode.UpArrow))
                _holdJump = true;
            if (Input.GetKeyUp(KeyCode.LeftArrow))
                _touchDirection = MoveDirection.None;
            if (Input.GetKeyUp(KeyCode.RightArrow))
                _touchDirection = MoveDirection.None;
            if (Input.GetKeyUp(KeyCode.UpArrow))
                _holdJump = false;
            
            if (GamePlayController.Instance.gameState != GameState.Playing || IsDie())
            {
                _touchDirection = MoveDirection.None;
                
            }
            switch (_touchDirection)
            {
                case MoveDirection.None:
                    movement.TouchMoveLeft(true);
                    movement.TouchMoveRight(true);
                    break;
                case MoveDirection.Left:
                    movement.TouchMoveLeft();
                    break;
                case MoveDirection.Right:
                    movement.TouchMoveRight();
                    break;
            }
            if (GamePlayController.Instance.gameState != GameState.Playing || IsDie()) return;
            movement.TouchJump(!_holdJump);
        }

        // public float GetBallRadius()
        // {
        //     return movement.BallRadius;
        // }
        
        #region Magnetic

        public void CollectingCoin()
        {
            magnetic.CollectingCoin();
        }

        public void Collected()
        {
            magnetic.Collected();
        }

        public void ActiveMagnet(bool active)
        {
            magnetic.ActiveMagnet(active);
        }

        #endregion

        #region Health

        public void Damage(DamageType damageType, int damage, Transform damageObj)
        {
            health.Damage(damageType, damage, damageObj);
        }
        
        public bool IsDie()
        {
            return health.isDie;
        }

        public void Revive()
        {
            health.Revive();
        }

        public void SetForce(Vector2 force, bool special = false)
        {
            movement.SetForce(force, special);
        }

        public void SetForceInstant(Vector2 force)
        {
            movement.SetForceInstant(force);
        }

        public void ActiveHeartEffect()
        {
            heartEffect.SetActive(true);
        }
        #endregion

        #region Movement
        public void Win(Transform target)
        {
            GamePlayController.Instance.gameState = GameState.End;
            _touchDirection = MoveDirection.None;
            _holdJump = false;
            SoundInGameManager.Instance.PlayBallWinSound();
            SoundInGameManager.Instance.PlayWinSound(() => { GamePlayController.Instance.Win(); });
            animation.PlaySmile();
            GetComponent<Rigidbody2D>().isKinematic = true;
            GetComponent<Rigidbody2D>().velocity = Vector2.zero;
            GetComponent<Collider2D>().enabled = false;
            var sequence = DOTween.Sequence();
            sequence.Append(transform.DOMoveX(target.position.x, 1.6f).SetEase(Ease.OutBack));
            sequence.Join(transform.DOMoveY(target.position.y, 1.6f).SetEase(Ease.OutBack));
            sequence.Join(transform.DOScale(0, 1f).SetEase(Ease.Linear));
            sequence.OnComplete(() =>
            {
                
            });
            sequence.Play();
        }

        public void MoveLeft(bool release = false)
        {
            _touchDirection = release ? MoveDirection.None : MoveDirection.Left;
        }

        public void MoveRight(bool release = false)
        {
            _touchDirection = release ? MoveDirection.None : MoveDirection.Right;
        }

        public void Jump(bool release = false)
        {
            _holdJump = !release;
        }

        public void CancelAllMove()
        {
            _touchDirection = MoveDirection.None;
        }
        
        #endregion

        #region Damage Enemy

        public void SetCanDamage(bool value)
        {
            attackTransform.SetActive(value);
        }


        #endregion
        #region SKin

        public void TrySkin(string skin)
        {
            
        }

        #endregion

        
        
    }
}