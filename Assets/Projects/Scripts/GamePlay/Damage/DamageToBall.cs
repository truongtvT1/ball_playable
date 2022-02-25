using System;
using Projects.Scripts.GamePlay.CharacterController;
using Projects.Scripts.Models;
using Projects.Scripts.UIController;
using UnityEngine;

namespace Projects.Scripts.GamePlay.Damage
{
    public class DamageToBall : MonoBehaviour
    {
        [SerializeField] private DamageType damageType;
        [SerializeField] private bool firstTimeNoDamage;
        [SerializeField] private int damage;
        
        public virtual void TriggerEnter(Collider2D other)
        {
            if (other.gameObject.tag.Equals("Player"))
            {
                GamePlayController.Instance.ball.Damage(damageType,firstTimeNoDamage?0:damage,transform);
                if (firstTimeNoDamage)
                    firstTimeNoDamage = false;
            }
        }

        public virtual void OnCollide(Collision2D other)
        {
            if (other.gameObject.tag.Equals("Player"))
            {
                GamePlayController.Instance.ball.Damage(damageType,firstTimeNoDamage?0:damage,transform);
                if (firstTimeNoDamage)
                    firstTimeNoDamage = false;
            }
        }
    }
}