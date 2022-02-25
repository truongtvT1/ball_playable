using System;
using System.Collections.Generic;
using DG.Tweening;
using Projects.Scripts.GamePlay.Building;
using Projects.Scripts.GamePlay.CharacterController;
using Projects.Scripts.GamePlay.Sound;
using Projects.Scripts.Models;
using Spine.Unity;
using ThirdParties.Truongtv.SoundManager;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace Projects.Scripts.UIController
{
    public class GamePlayController : MonoBehaviour
    {
        [SerializeField] public BallController ball;
        [SerializeField] private CheckPoint currentCheckPoint;
        [SerializeField] private SkeletonGraphic ballUI;
        [SerializeField] private GameObject magnetIcon;

        [SerializeField]
        private bool magnetActive;
        [SerializeField] public int totalCoin;
        [SerializeField] private CoinValueText coinValuePrefab;
        [SerializeField] public int level;
        [SerializeField] public GameState gameState = GameState.Prepare;
        [SerializeField] private List<Transform> starList;
        [SerializeField] public int totalStars;
        [SerializeField] private int currentHp;
        [SerializeField] private Transform[] hpList;
        [SerializeField] private GameObject hpPrefabs;
        [SerializeField] private TextMeshProUGUI lifeText;
        [SerializeField] private Transform lifeIcon;
        [SerializeField] private Button pauseButton;
        [SerializeField] private GameObject bossGroup;
        [SerializeField] private Image bossHp;
        [SerializeField] private CanvasGroup bossWarning;
        [SerializeField] private SkeletonGraphic bossSkeleton;
        public Image tapToContinue;
        private static GamePlayController _instance;
        public static GamePlayController Instance => _instance;
        public Action onRevive;
        private void Awake()
        {
            if (_instance != null)
            {
                Destroy(_instance.gameObject);
            }

            _instance = this;
            var sceneName = SceneManager.GetActiveScene().name;
            var levelString = sceneName.Replace("Level ", "");
            if (int.TryParse(levelString, out level))
            {
                
            }
            
        }
        private void Start()
        {
            ball = BallController.Instance;
           
            tapToContinue.gameObject.SetActive(true);
            tapToContinue.raycastTarget = false;
            pauseButton.onClick.AddListener(() =>
            {
                SoundManager.Instance.PlayButtonSound();
            });
            SoundInGameManager.Instance.PlayBgmSound();
            var sceneName = SceneManager.GetActiveScene().name;
            currentCheckPoint = StartLevel.Instance.Init(sceneName);
            currentHp = 3;
            foreach (var star in starList)
            {
                star.gameObject.SetActive(false);
            }
            
            for (int i = 0; i < currentHp; i++)
            {
                hpList[i].gameObject.SetActive(true);
            }

            lifeText.text = "3";
            StartGame();
            SetSkin("Base");
        }
        
        private void StartGame()
        {
            gameState = GameState.Playing;
        }
        #region Coin

        public void CollectCoin(int value,Transform coinTransform)
        {
            totalCoin += value;
            SoundInGameManager.Instance.PlayBallCollectCoin();
            var item = Instantiate(coinValuePrefab);
            item.transform.position = coinTransform.position;
            item.SetValue(value);
        }

        public void SetCollectingCurrency()
        {
            ball.CollectingCoin();
        }

        public void SetCollectedCurrency()
        {
            ball.Collected();
        }
       

        #endregion

        #region Star

        public void CollectStar(Transform starTransform)
        {
            totalStars += 1;
            SoundInGameManager.Instance.PlayBallCollectStar();
            starList[totalStars - 1].position = starTransform.position;
            starList[totalStars - 1].gameObject.SetActive(true);
            var sequence = DOTween.Sequence();
            sequence.Append(starList[totalStars - 1].DOLocalMoveX(0, 0.5f))
                .Join(starList[totalStars - 1].DOLocalMoveY(0, 0.5f)
                .SetEase(Ease.InCirc))
                .Play();
        }

        #endregion

        #region Hp

        public void CollectHp(Transform hpTransform)
        {
            
            currentHp += 1;
            if (currentHp >= 3)
            {
                currentHp = 3;
            }
            var item = Instantiate(hpPrefabs, hpList[0].parent);
            item.transform.position = hpTransform.position;
            var sequence = DOTween.Sequence();
            sequence.Append(item.transform.DOLocalMoveX(0, 0.5f))
                .Join(item.transform.DOLocalMoveY(0, 0.5f)
                .SetEase(Ease.InCirc))
                .OnComplete(() =>
                {
                    hpList[currentHp - 1].gameObject.SetActive(true);
                    DestroyImmediate(item);
                })
                .Play();
        }

        #endregion
        #region Magnet

        public void CollectMagnet( Transform magnetItem)
        {
            magnetIcon.transform.position = magnetItem.position;
            magnetIcon.gameObject.SetActive(true);
            var sequence = DOTween.Sequence();
            sequence.Append(magnetIcon.transform.DOLocalMoveX(0, 0.5f));
            sequence.Join(magnetIcon.transform.DOLocalMoveY(0, 0.5f).SetEase(Ease.InCirc));
            sequence.OnComplete(() =>
            {
                ball.ActiveMagnet(true);
                magnetActive = true;
            });
            sequence.Play();
            
        }

        public bool IsMagnetActive()
        {
            return magnetActive;
        }
        private void OnDestroy()
        {
            StopAllCoroutines();
        }

        #endregion

        #region Life

        public void CollectLife(int value,Transform target)
        {
            ball.ActiveHeartEffect();
        }

        #endregion

        #region Ball

        public void SetSkin(string skin)
        {
            ballUI.initialSkinName = skin;
            ballUI.Initialize(true);
        }
        public void SetCheckPoint(CheckPoint checkPoint,bool playSound = true)
        {
            currentCheckPoint = checkPoint;
            if(playSound)
            SoundInGameManager.Instance.PlayBallInCheckPoint();
        }

        public void BallDamaged(int value)
        {
            for (var i = 0; i < hpList.Length; i++)
            {
                hpList[i].gameObject.SetActive(i<value);
            }
        }

        public void BallDie()
        {

            ShowContinue();
        }
        
        
        
        #endregion

        #region GameState

        

        public void PauseWhenBallDie()
        {
            gameState = GameState.Pause;
        }

      
        public void Win()
        {
            ShowContinue();
        }

        
        private void ShowContinue()
        {
            tapToContinue.gameObject.SetActive(true);
            tapToContinue.raycastTarget = true;
        }

        public void GoToStore()
        {
            
        }
        #endregion

        #region Controller

        public void TouchMoveLeft(bool release)
        {
            if(ball!=null && gameState !=GameState.Playing&& !ball.IsDie()) return;
            if (!release)
            {
                if (!tapToContinue.raycastTarget)
                {
                    tapToContinue.gameObject.SetActive(false);
                }
                else
                {
                    GoToStore();
                }
            }
            
            ball.MoveLeft(release);
        }

        public void TouchMoveRight(bool release)
        {
            if(ball!=null && gameState !=GameState.Playing&& !ball.IsDie()) return;
            if (!release)
            {
                if (!tapToContinue.raycastTarget)
                {
                    tapToContinue.gameObject.SetActive(false);
                }
                else
                {
                    GoToStore();
                }
            }
            
            ball.MoveRight(release);
        }

        public void TouchJump(bool release)
        {
            if(ball!=null && gameState !=GameState.Playing&& !ball.IsDie()) return;
            if (!release)
            {
                if (!tapToContinue.raycastTarget)
                {
                    tapToContinue.gameObject.SetActive(false);
                }
                else
                {
                    GoToStore();
                }
            }
            
            ball.Jump(release);   
        }
        #endregion

        #region Fight Boss


        private void ExitRoom()
        {
        }

        
        
       

        private void ActiveWarning(Action complete = null)
        {
            bossWarning.gameObject.SetActive(true);
            bossWarning.alpha = 1;
            bossWarning.DOFade(0, 0.75f).SetEase(Ease.InOutSine).SetLoops(5).OnComplete(() =>
            {
                gameState = GameState.Playing;
                bossWarning.gameObject.SetActive(false);
                complete?.Invoke();
                bossGroup.SetActive(true);
            });
        }

        public void SetBossHealth(float percent)
        {
            bossHp.fillAmount = percent;
            if (percent <= 0)
            {
                bossGroup.SetActive(false);
                ExitRoom();
            }
        }

        public void SetBossSkin(SkeletonDataAsset asset)
        {
            bossSkeleton.skeletonDataAsset = asset;
            bossSkeleton.Initialize(true);
        }
        #endregion
    }
}