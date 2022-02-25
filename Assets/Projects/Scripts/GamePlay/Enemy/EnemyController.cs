using System.Collections;
using DG.Tweening;
using Projects.Scripts.GamePlay.Item;
using Spine.Unity;
using ThirdParties.Truongtv.SoundManager;
using UnityEngine;

namespace Projects.Scripts.GamePlay.Enemy
{
    public class EnemyController : MonoBehaviour
    {
        [SerializeField] protected GameObject icon, health, attack;
        [SerializeField] protected ParticleSystem dieEffect, damageEffect;
        [SerializeField] protected SkeletonAnimation anim;
        [SpineAnimation(), SerializeField] protected string idle, die, idle_fx, move, chasing;
        [SerializeField] protected bool fixedMovement, isFallDead, isStar;
        [SerializeField] protected SpriteRenderer detectCamera;
        [SerializeField] protected AudioClip dieSfx,movingSfx,idleSfx;
        [SerializeField]
        protected int maxHp;

        [SerializeField]
        protected int currentHp;

        [SerializeField]
        protected GameObject starPrefab;

        [SerializeField]
        protected float delaySpawnStar;

        [SerializeField]
        protected Vector2 spawnDir = new Vector2(0, 1);

        [SerializeField]
        protected float forceSpawn = 1f;


        protected virtual void Start()
        {
            currentHp = maxHp;
            Idle();
            if (!fixedMovement)
            {
                StartCoroutine(CheckVisible());
            }
        }


        IEnumerator CheckVisible()
        {
            if (detectCamera == null)
            {
                yield break;
            }

            yield return new WaitUntil(() => detectCamera.isVisible);
        }

        public virtual void Idle()
        {
          

           
            anim.AnimationState.SetAnimation(0, idle, true);

            if (!string.IsNullOrEmpty(idle_fx))
            {
                anim.AnimationState.SetAnimation(1, idle_fx, true);
            }

        }

        public virtual void Flip()
        {
            attack.transform.localScale = new Vector3(-attack.transform.localScale.x, attack.transform.localScale.y);
            health.transform.localScale = new Vector3(-health.transform.localScale.x, health.transform.localScale.y);
            anim.Skeleton.ScaleX = -anim.Skeleton.ScaleX;
           
        }

        public  void OnCollisionEnter2D(Collision2D coll)
        {
            if (coll.collider.tag.Equals("Player"))
            {
                // var healthCollider = health.GetComponent<Collider2D>();
                // if (Physics2D.Raycast(coll.transform.position - new Vector3(0,GamePlayController.Instance.ball.GetBallRadius(),0),)
                // {
                if (damageEffect != null)
                    damageEffect.gameObject.SetActive(true);
               
                currentHp -= 1;
                if (currentHp == 0)
                {
                    Die();
                    GetComponent<Collider2D>().enabled = false;
                }

                // }
            }
        }

        public virtual void ReachPlayer()
        {
        }

        public virtual void Die()
        {
           
            // if (dieSfx)
            // {
            //     audio?.Play(dieSfx);
            // }
            attack.SetActive(false);
            health.SetActive(false);

            var body = GetComponentInChildren<Rigidbody2D>();
            if (body)
            {
                body.gameObject.SetActive(false);
            }

           
            anim.AnimationState.ClearTrack(1);
            anim.AnimationState.SetAnimation(0, die, false).Complete += entry =>
            {
                if (isFallDead)
                {
                    if (isStar)
                    {
                        StartCoroutine(SpawnStar());
                    }

                    float speed = 10;
                    icon.transform.DOMoveY(-10, speed)
                        .SetSpeedBased(true)
                        .SetEase(Ease.InSine)
                        .OnComplete(() => { icon.SetActive(false); });
                }
                else
                {
                    icon.SetActive(false);
                    if (isStar)
                    {
                        StartCoroutine(SpawnStar());
                    }
                }
            };
            if (dieEffect != null) dieEffect.gameObject.SetActive(true);
        }

        protected IEnumerator SpawnStar()
        {
            yield return new WaitForSeconds(delaySpawnStar);
            var obj = Instantiate(starPrefab, icon.transform.position + new Vector3(0, 2f, 0), Quaternion.identity);
            yield return new WaitUntil(() => obj);
            var star = obj.GetComponent<Star>();
            if (star)
            {
                star.collider.isTrigger = false;
                var rb = star.collider.gameObject.AddComponent<Rigidbody2D>();
                rb.AddForce(spawnDir * forceSpawn, ForceMode2D.Impulse);
            }
        }

        protected virtual void OnDrawGizmos()
        {
        }
    }
}