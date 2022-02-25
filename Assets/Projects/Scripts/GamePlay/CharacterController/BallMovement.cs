using System;
using DG.Tweening;
using Projects.Scripts.GamePlay.Sound;
using Projects.Scripts.Models;
using Truongtv.Utilities;
using UnityEngine;

namespace Projects.Scripts.GamePlay.CharacterController
{
    public class BallMovement : MonoBehaviour
    {
        
        [SerializeField]
        private float  moveSpeed, acceleration ,decceleration,deccelTime;
        [SerializeField] private Transform icon,totalDisplay;
        [SerializeField]public MoveDirection moveDirection;
        [SerializeField]
        private float jumpForce;
        [SerializeField] private float jumpCutMultiple;
        [SerializeField]
        private float gravityScale, fallGravityMultiple;
        [SerializeField]
        private Rigidbody2D rigidbody2D;

        [SerializeField]
        private LayerMask groundLayer;
        [SerializeField]
        private LayerMask wallLayer;
        [SerializeField]
        private LayerMask boxLayer;
        [SerializeField]
        private Transform groundCheckPoint;

        [SerializeField] private float ballRadius;

        [SerializeField] private float JumpCoyoteTime, jumpBufferTime;

        [SerializeField]
        private float forcePushBox;
        [SerializeField] private GameObject landingEffect, moveEffect;
        [SerializeField]private float effectByForceTime = 0.5f;
        private MoveDirection _roll;
        private float lastGroundedTime, lastJumpTime,countDeccelTime;
        private bool isJumping,isJumpButtonRelease = true;
        private bool effectByForce;
       
        private float effectByForceCountTime = 0.5f;
        private bool _moveEffectSpawnRunning,_collisionWithWall;
        private BallController _controller;
        public void Init(BallController controller)
        {
            _controller = controller;
        }

        private void Update()
        {
            #region Check Ground
            if (CheckIsGrounded())
            {
                if (lastGroundedTime<0f)
                {
                    var obj = Instantiate(landingEffect);
                    obj.transform.SetParent(transform.parent);
                    obj.transform.localPosition = transform.localPosition + new Vector3(0, -0.6f, 0f);
                    SoundInGameManager.Instance.PlayBallLandingSound();
                }
                lastGroundedTime = JumpCoyoteTime;
                if (!_moveEffectSpawnRunning)
                {
                    _moveEffectSpawnRunning = true;
                    InvokeRepeating(nameof(RunEffect),0f,0.2f);
                }
                rigidbody2D.gravityScale = gravityScale;
            }
            else
            {
                lastGroundedTime -= Time.deltaTime;
                _moveEffectSpawnRunning = false;
                CancelInvoke(nameof(RunEffect));
            }
            if (Physics2D.OverlapPoint(groundCheckPoint.position + new Vector3(ballRadius*(int)moveDirection,0,0f),  wallLayer))
            {
                _collisionWithWall = true;
            }
            else
            {
                _collisionWithWall = false;
            }
            #endregion
            
            #region Jump gravity

            if (rigidbody2D.velocity.y < 0)
                rigidbody2D.gravityScale = gravityScale * fallGravityMultiple;
            else
                rigidbody2D.gravityScale = gravityScale;

            #endregion
            
            #region Jump

            if (!isJumpButtonRelease)
                lastJumpTime = jumpBufferTime;
            else
                lastJumpTime -= Time.deltaTime;

            if (!effectByForce)
            {
                if (rigidbody2D.velocity.y > 0 && isJumping && isJumpButtonRelease)
                {
                    rigidbody2D.AddForce(Vector2.down*rigidbody2D.velocity.y* jumpCutMultiple,ForceMode2D.Impulse);
                    lastJumpTime = 0;
                }
                else if (rigidbody2D.velocity.y < 0 && isJumping)
                {
                    isJumping = false;
                }
            }

            #endregion
            
            #region Movement

            if (effectByForce)
            {
                effectByForceCountTime -= Time.deltaTime;
                if (effectByForceCountTime <= 0)
                {
                    effectByForce = false;
                }
                
            }
            else
            {
                if (!_collisionWithWall)
                {
                    if (moveDirection != MoveDirection.None)
                    {
                        countDeccelTime = deccelTime;
                        if (rigidbody2D.velocity.x *(int)moveDirection< moveSpeed)
                        {
                            var velocity = rigidbody2D.velocity;
                            velocity.x += (int) moveDirection * acceleration * Time.fixedDeltaTime;
                            rigidbody2D.velocity = velocity;
                        }
                    }
                    else
                    {
                        countDeccelTime -= Time.deltaTime;
                        if (countDeccelTime > 0)
                        {
                            var velocity = rigidbody2D.velocity;
                            if (velocity.x < 0)
                            {
                                velocity.x += decceleration * Time.deltaTime;
                                if (velocity.x > 0) velocity.x = 0;
                            }
                            else if (velocity.x > 0)
                            {
                                velocity.x -= decceleration * Time.deltaTime;
                                if (velocity.x < 0) velocity.x = 0;
                            }
                            rigidbody2D.velocity = velocity;
                        }
                    }
                }
            }
            #endregion

            if (Mathf.Abs(rigidbody2D.velocity.x) < 1f)
            {
                RollEffect();
            }
            else
            {
                _roll = MoveDirection.None;
                icon.DOKill();
            }
        }
        private bool CheckIsGrounded()
        {
            return isGround;
        }

        private bool isGround;
        private void OnCollisionEnter2D(Collision2D other)
        {
            isGround = Extended.IsInLayerMask(other.gameObject, groundLayer);
        }

        private void OnCollisionExit2D(Collision2D other)
        {
            isGround = !Extended.IsInLayerMask(other.gameObject, groundLayer);
        }
        #region Controller

        public void TouchMoveLeft(bool release = false)
        {
            if (release) // release button left
                moveDirection = MoveDirection.None;
            else
            {
                moveDirection = MoveDirection.Left;
                var scale = transform.localScale;
                totalDisplay.localScale= new Vector3(Mathf.Abs(scale.x)*(int)moveDirection,scale.y,scale.z);
            }
        }

        public void TouchMoveRight(bool release = false)
        {
            if (release)// release button right
                moveDirection = MoveDirection.None;
            else
            {
                moveDirection = MoveDirection.Right;
                var scale = transform.localScale;
                totalDisplay.localScale= new Vector3(Mathf.Abs(scale.x)*(int)moveDirection,scale.y,scale.z);
            }
        }

        public void TouchJump(bool release = false)
        {
            if (release) // release button jump
            {
                isJumpButtonRelease = true;
            }
            else
            {
                isJumpButtonRelease = false;
                lastJumpTime = jumpBufferTime;
                if (lastGroundedTime > 0 && lastJumpTime > 0 && !isJumping && rigidbody2D.velocity.y<4f)
                {
                    var velocity = rigidbody2D.velocity;
                    velocity.y = jumpForce;
                    rigidbody2D.velocity = velocity;
                    lastGroundedTime = 0;
                    lastJumpTime = 0;
                    isJumping = true;
                    SoundInGameManager.Instance.PlayBallJumpSound();
                }
            }
        }

       
        public void SetForce(Vector2 force,bool special = false)
        {
            SetForceInstant(force);
            if (!special) return;
            effectByForce = true;
            effectByForceCountTime = effectByForceTime;
        }
        public void SetForceInstant(Vector2 force)
        {
            rigidbody2D.velocity = force;
        }
        #endregion

        #region Effect

        private void RollEffect()
        {
            if (moveDirection == MoveDirection.Left)
            {
                if (_roll != MoveDirection.Left)
                {
                    _roll = MoveDirection.Left;
                    icon.DOLocalRotate(new Vector3(0,0,-180f), 0.75f,RotateMode.FastBeyond360).SetRelative(true).SetEase(Ease.Linear).SetLoops(-1,LoopType.Incremental);
                }
            }
            else if (moveDirection == MoveDirection.Right)
            {
                if (_roll != MoveDirection.Right)
                {
                    _roll = MoveDirection.Right;
                    icon.DOLocalRotate(new Vector3(0,0,-180f), 0.75f,RotateMode.FastBeyond360).SetRelative(true).SetEase(Ease.Linear).SetLoops(-1,LoopType.Incremental);
                }
            }
            else
            {
                _roll = MoveDirection.None;
                icon.DOKill();
            }
        }

        private void RunEffect()
        {
            if (moveDirection != MoveDirection.None)
            {
                var obj = Instantiate(moveEffect);
                obj.transform.position = transform.position + new Vector3(0, -0.6f, 0f);
            }
        }

        #endregion

        
    }
}